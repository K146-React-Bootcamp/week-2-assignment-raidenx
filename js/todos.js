renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;
var x = true;
let z = true;

// X ve Z yi Sort metodunda click işlemlerini tekrarlayabilmek için kullandım


let currentPage = 2;
let rows = 15;




const renderTodos = (page) => {




	root.innerHTML = "";
	// todoları listele
	const table = document.createElement("table");
	table.setAttribute("class", "table table-hover");

	const thead = document.createElement("thead");
	thead.innerHTML = `
    <tr>
      <th class="text-center" scope="col">id</th>
      <th scope="col">Başlık</th>
      <th scope="col">Kullanıcı Id</th>
      <th scope="col">Durum</th>
      <th scope="col"></th>
    </tr>
  `;
	table.appendChild(thead);

	const tbody = document.createElement("tbody");
	const renderItem = (item) => {
		const tr = document.createElement("tr");
		tr.innerHTML = `
      <td class="text-center">${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${item.id
			}>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${item.id
			}>Düzenle</button>
      </td>
    `;
		tbody.appendChild(tr);
	};
	todos.slice(0, 15).forEach((item) => {
		renderItem(item);
	});


	table.appendChild(tbody);
	root.append(table);


	// 	page--;

	// 	let start = rowsPerPage * page;
	// 	let end = start + rowsPerPage;
	// 	let paginatedItems = items.slice(start, end)
	// 	console.log(paginatedItems)
	// 	for (let i = 0; i < paginatedItems.length; i++) {
	// 					let item = items[i];
	// 					let itemElement = document.createElement("div");
	// 					itemElement.classList.add("item");
	// 					itemElement.innerText = `${item.id} $${item.userId}`;
	// 					document.body.appendChild(itemElement)
	// 					console.log(root)
	// 	}
	// }


				// Pagination kısmı
	page--;
	let start = rows * page;
	let end = start + rows;
	let paginatedItems = todos.slice(start, end);

	paginatedItems.forEach((item) => {
		renderItem(item);
	});

	document.querySelectorAll('.page-link').forEach((btn) => {
		btn.addEventListener('click', () => {
			let data_id = btn.getAttribute('data-id');
			current_page = Number(data_id);
			renderTodos(current_page);
		});
	});







	// 		SORT kısmı id için
	let th = document.querySelectorAll("th")[0];
	th.classList.add("cursor");
	th.style.cursor = "pointer"
	th.addEventListener("click", () => {
		if (x === true) {
			todos = todos.slice(0, 15).sort((a, b) => {
				return b.id - a.id;
			})
			x = false;
		}
		else {
			todos = todos.slice(0, 15).sort((a, b) => {
				return a.id - b.id;
			})
			x = true;
		}
		renderTodos();
	})


	// 		SORT Kısmı title için
	let id = document.querySelectorAll("th")[1];
	id.classList.add("cursor");
	id.classList.add("text-center");
	id.style.cursor = "pointer"
	id.addEventListener("click", () => {
		if (z === true) {
			todos = todos.slice(0, 15).sort((a, b) => {
				const nameA = a.title.toUpperCase();
				const nameB = b.title.toUpperCase()
					
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			})
			z = false;
		}
		else {
			todos = todos.slice(0, 15).sort((a, b) => {
				const nameA = a.title.toUpperCase();


				if (nameA > a) {
					console.log("?")
				}
				else {
					return -1;
				}
			})
			z = true;

		}

		renderTodos();
	})



	document.querySelectorAll(".remove").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = Number(e.currentTarget.getAttribute("data-id"));
			if (confirm("kaydı silmek istediğinize emin misiniz?")) {
				todos = todos.filter((x) => x.id !== id);
				renderTodos();
			}
		});
	});

	document.querySelectorAll(".edit").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = Number(e.currentTarget.getAttribute("data-id"));
			todo = todos.find((todo) => todo.id == id);
			editModal.querySelector("#title").value = todo.title;
			editModal.querySelector("#completed").checked = todo.completed;
			editModal.style.display = "block";
			editModal.classList.add("show");
		});
	});

	editModal.querySelector("#save").addEventListener("click", () => {
		todo.title = editModal.querySelector("#title").value;
		todo.completed = editModal.querySelector("#completed").checked;
		const index = todos.findIndex((t) => t.id == todo.id);
		todos[index] = todo;
		renderTodos();
		editModal.style.display = "none";
		editModal.classList.remove("show");
	});

	editModal.querySelectorAll(".close").forEach((button) => {
		button.addEventListener("click", () => {
			editModal.style.display = "none";
			editModal.classList.remove("show");
		});
	});




};



fetch(todosUrl)
	.then((resp) => resp.json())
	.then((data = []) => {
		todos = data;
		renderTodos();
	})
	.catch((error) => {
		errorLogger(error);
	});

	// sıralama ödevi algoritması
	// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
	// event listener hangi kolon için tıklanıyorsa
	// sort metodu kullanılarak sıralama yapılacak
	// sıralanmış todos'todus içerisine atılacak
	// renderTodos metodu çalıştırılacak.
