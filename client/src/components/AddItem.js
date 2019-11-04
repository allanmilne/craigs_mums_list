import React from 'react';

const AddItem = () => {
    return (
        <>
        <form>
            <label for="item_title">Item Title</label>
            <input type="text" name="item_title"></input>

            <label for="category">Category</label>
            <select name="category">
                <option>{category}</option>
            </select>

            <label for="description">Description</label>
            <input type="text" name="description"></input>

            <label for="image">Image</label>
            <input name="image" type="image"></input>

            <label for="price">Price</label>
            <input name="price" type="number"></input>

        </form>
        </>
    )
}

export default AddItem;