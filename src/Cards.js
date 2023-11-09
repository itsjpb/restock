import React from "react";

// TEST FILE - do not judge


// base testing format fo card information; may grow
const cards = [
    {
        id: '',
        name: '',
        idList: '',
        desc: '',
        due: ''
    },
    {
        id: '',
        name: '',
        idList: '',
        desc: '',
        due: ''
    },
    {
        id: '',
        name: '',
        idList: '',
        desc: '',
        due: ''
    }
/*     {
        id: '',
        name: '',
        idList: '',
        desc: '',
        due: ''
    } */
]


// trying to make objects i can work with. the next two items are based fully on that, no idea if they work
const CardList = () => (
    <div>
        {cards.map(card => (
            <Card key={card.id}
                    id={card.id}
                    name={card.name}
                    idList={card.idList}
                    desc={card.desc}
                    due={card.due}></Card>

        ))}
    </div>
)


var Card = ({ id,  name, idList, desc, due }) => (
    <div>
     <p>id: {id}</p>
     <p>name: {name}</p>
     <p>idList: {idList}</p>
     <p>desc: {desc}</p>
     <p>due: {due}</p>

    </div>
   );



   //atempt at adapting the add crd function for use with json objects. does not even come close to working
   async function AddCard2(id) {
    const formData = new FormData();
    formData.append()
    formData.append('idList', card.idList);
    formData.append('name', card.name);
    formData.append('desc', card.desc);
   
    const response = await fetch('https://api.trello.com/1/cards?key=cf4871448e422d8b29372e4438d740cb&token=ATTAffa001e5ab0d1b20f40abe41c25dabb69ed12f876957fa5cf000f44983a472de23E6A847&name=do it work&idList=6533174897737ec8f0849068&desc=https://www.amazon.com/Datacard-isopropanol-cleaning-534000-003-AlphaCard/dp/B01MF72GJS', {
       method: 'POST'
    })
    return response.json
   }
   
   export default {AddCard2}