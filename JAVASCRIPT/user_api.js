let url = "https://api.github.com/users";
// window
// .fetch(url)
// .then((res)=>res.json())
// .then((userData)=>console.table(userData))
// .catch((err)=>console.error(err));
window
    .fetch(url)
    .then((res) => res.json())
    .then((userData) =>
        userData.map((person) => {
            let sub_container = document.createElement('div');
            let image_container = document.createElement('div');
            let user_container = document.createElement('h3');
            let id = document.createElement('h2');
            let name = document.createElement('h2');
            let login = document.createElement('h2');
            let type = document.createElement('h2');
            let images = document.createElement('img');

            name.innerText = `Id : ${person.id}`;
            login.innerText = `Name: ${person.login}`;
            type.innerText = `Type: ${person.type}`;

            user_container.appendChild(name);
            user_container.appendChild(login);
            user_container.appendChild(type);
            user_container.appendChild(id);

            let main_container = document.getElementById('container');

            main_container.appendChild(sub_container);
            sub_container.appendChild(image_container);



            sub_container.appendChild(user_container);
            image_container.appendChild(images);


            images.src = `${person.avatar_url}`;
            images.style.height = "250px";
            images.style.width = "250px";
            sub_container.style.backgroundColor="skyblue";
            sub_container.style.margin = "10px";
            sub_container.style.borderRadius = "20px";
            sub_container.style.display = "flex";
            sub_container.style.alignItems = "center";
            sub_container.style.justifyContent = "space-evenly";
            sub_container.style.cursor = "pointer";

            sub_container.addEventListener("click", () => {
                window.location.href = person.url;
            });
            
            console.log(sub_container);
        })
    )
    .catch((err) => console.error(err));