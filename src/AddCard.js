
//function to add card to rello board; uses fetch for post request; currently designed for a single card, will be adapted later 
async function AddCard() {

    const response = await fetch('https://api.trello.com/1/cards?key=cf4871448e422d8b29372e4438d740cb&token=ATTAffa001e5ab0d1b20f40abe41c25dabb69ed12f876957fa5cf000f44983a472de23E6A847&name=do it work&idList=6533174897737ec8f0849068&desc=https://www.amazon.com/Datacard-isopropanol-cleaning-534000-003-AlphaCard/dp/B01MF72GJS', {
        method: 'POST'
    })
    return response.json
}

export {AddCard}