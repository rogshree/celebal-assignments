
    let takingnotes = document.getElementById("notetaking");
    let target;
    let deletepointer;
    let saves;
    let record = [];
    let counter =0;
    let adder = document.getElementById("add");
    let edits;
    adder.addEventListener("click",()=>{
        document.getElementById("mainarea").insertAdjacentHTML("afterend",
        '<div class="maintext saves" id="saves"><button class="change edit">edit</button><button class="change delete">delete</button></div>');
        let notes = document.createElement("input");
        notes.setAttribute('type','text');
        notes.setAttribute('id',`${counter}editnotes`);
        record.push(counter);
        notes.setAttribute('placeholder','Text');
        let middle = takingnotes.value;
        notes.value = middle;
        notes.readOnly = true;

        target = document.querySelector(".edit");
        target.id = `${counter}edit`;

        deletepointer = document.querySelector(".delete");
        deletepointer.id = `${counter}delete`;

        saves = document.querySelector("#saves");
        saves.id = `saves${counter}delete`;

        target.parentNode.insertBefore(notes, target);
        takingnotes.value = "";
        counter++;
        // edits = document.querySelectorAll(".edit");
        // console.log(edits);
    })
    document.addEventListener('click', (e) => {
        let element = e.target;
        if(element.innerText == "edit"){        
            let idedit = document.getElementById(`${element.id}notes`)
            if(idedit.readOnly == true)
            idedit.readOnly = false;
            else
            idedit.readOnly = true;
        }
        if(element.innerText == "delete")
        {
            let iedit = document.getElementById(`saves${element.id}`);
            iedit.remove();
        }
    });