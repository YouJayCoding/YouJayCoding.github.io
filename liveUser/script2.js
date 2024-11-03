const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
const imageItems = []
const btns = document.querySelectorAll('.icon');
const myValue = document.querySelector('.user-value');
const test = document.querySelector(".test");
const info = document.getElementById("info");

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=90')

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''
    

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        // test.addEventListener('click', (e )=> {
            
            
            
        //         if(e.target.value.includes("email")) {
        //             myValue.innerHTML = `${user.email}`
        //         } else if (
        //             e.target.value.includes("phone")) {
        //                 myValue.innerHTML = `${user.cell}`}
        //         else {myValue.innerHTML = `${user.gender}` }
        
                
            
        
        // });

        // btns.forEach((btn) => {
            
        //     btn.addEventListener('click', (e) => {
                
                
        //     const value = e.target.value; 
                    
        //     switch (value) {
        //         case "email":
        //             myValue.innerHTML = "user.email";
        //             break
        //         case "phone":
        //             myValue.innerHTML = "user.cell";
        //             break
        //         case "street":
        //             myValue.innerHTML = "user.gender";
        //             break
        //         }

              
        //       //removeActive(btns);
        //       //btn.classList.add('active');
        //     });
        //   });

        li.innerHTML = `
        <div>
           <div class="myImage">
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
            </div>
        </div>
    <div class="test">  
               
        <div> <i class="far fa-envelope-open"></i> ${user.location.postcode}</div>
        <span> <i class= "fas fa-birthday-cake"></i> ${user.dob.age}</span>
        <div> <i class="fas fa-phone"></i> ${user.cell}</div>
          
     </div> 
     </div> 
        `

        result.appendChild(li)
        // let myImage = document.querySelector(".myImage");
        // myImage.addEventListener('click', (myImage) => {
            
        //     myImage.classList.add('active');
        //   });
    })
}

// imageItems.forEach(item => {

//         btns.addEventListener('click', () => {
            
//            body.classList.add('active');
//           })
// })

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().startsWith(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}