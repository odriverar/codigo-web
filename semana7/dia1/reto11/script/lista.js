
const tableContainer = document.querySelector("#table-container")

const renderMovies = async () => {
    const movies = await getMovies();

    movies.map((movie) => {
        const html = `
                    <tr id='row_${movie.id}'>
                        <td>${movie.name}</td>
                        <td>${movie.director}</td>
                        <td>${movie.gender}</td>
                        <td><a target="_blank" href="${movie.video_link}">Ver video</a></td>
                        <td>
                            <div>
                                <button class="btn btn-warning">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button onclick="deleteMovies(${movie.id})" class="btn btn-danger">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
        `;
        tableContainer.innerHTML += html;
    })
};

// Vamos a crear una funcion que se encargue de eliminar las peliculas

const deleteMovies = async (id) => {

    const result = await Swal.fire({
      title: "Esta seguro(a)?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result) {
        await deleteItem(id);
        const row = document.querySelector(`#row_${id}`);
        row.remove();
    }
}


renderMovies();