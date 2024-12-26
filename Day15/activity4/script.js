function outerArea() {
  let allItems = [];

  return {
    add: function (item) {
      allItems.push(item);
      console.log(`${item} added.`);
    },

    remove: function (item) {
      const index = allItems.indexOf(item);

      if (index !== -1) {
        allItems.splice(index, 1);
        console.log(`${item} is removed!`);
      } else {
        console.log(`${item} not found.`);
      }
    },

    listItems: function () {
      console.log(allItems.join(", "));
    },
  };
}

const manager = outerArea();
console.log(manager);

manager.add("book");
manager.add("pencil");
manager.add("eraser");
manager.add("storyBooks");
manager.add("GeometryBox");
manager.add("Water Bottle");

manager.listItems();

// What does indexOf mean => The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// What does splice mean => The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. eg: we got an array contains arr = [1,2,3,4,5], now if we want to add or remove we can use arr.splice(1, 0, 22 ) => in the place of 2 it will add 22 but 2 gets shfits and index changes to 3 for 2. and if you put 1 instead of 0 then it will delete 2 and replace 22 instead.
