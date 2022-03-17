d3.selectAll("body").on("change", updatePage);

function updatePage() {
    dropdownMenu = d3.select("#selectOption").node();
    dropdownMenuID = dropdownMenu.id;
    selectedOption = dropdownMenu.value;

    console.log(dropdownMenu);
    console.log(dropdownMenuID);
    console.log(selectedOption);

}
