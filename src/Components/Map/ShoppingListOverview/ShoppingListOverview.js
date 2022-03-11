import {useEffect, useState} from "react";
import ShoppingListOverviewRow from "./ShoppingListOverviewRow";

const ShoppingListOverview = (props) => {
    // const [slist, setSlist] = useState(props.slist)
    const [itemsArr, setItemsArr] = useState([])

    const slistToArray = (slist) => {
        let itemsArr = []
        for (const catitems of slist) {
            for (const item of catitems.items) {
                itemsArr.push(
                    {
                        name: item.name,
                        aisle: catitems.aisle,
                        isChecked: item.isChecked
                    }
                )
            }
        }
        return itemsArr;
    }

    useEffect(() => {
            setItemsArr(slistToArray(props.slist))
        },
        [props.slist])

    const isCheckedHandler = (clickedItemName) =>{
        console.log(clickedItemName+" clicked")
        props.onTapRadioButton(clickedItemName)
    }

    return (
        <div>
            {itemsArr.map(
                (item, idx) => {
                    return <ShoppingListOverviewRow name={item.name} aisle={item.aisle} showAisle={true}
                                                    isChecked={item.isChecked}
                                                    onTapRadioButton={isCheckedHandler}
                                                    key={idx}/>
                })}
        </div>
    )

}

export default ShoppingListOverview;