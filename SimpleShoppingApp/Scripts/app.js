﻿var currentList = {};

function createShoppingList()
{
    currentList.name = $("#shoppingListName").val();
    currentList.name = new Array();
    
    showShoppingList();

}

function showShoppingList()
{

$("#shoppingListTitle").html(currentList.name);
$("#shoppingListItems").empty();

$("#createListDiv").hide();
    $("#shoppingListDiv").show();

    $("#newItemName").focus();
    $("#newItemName").keyup(function (event) {
        if (event.keyCode == 13)
        {

            addItem();
        }

    });
}
function addItem()
{

}
$(document).ready(function () {
    console.info("im ready!");
    $("#shoppingListName").focus();
    $("#shoppingListName").keyup(function (event)
    {
        if (event.keyCode == 13)
        {
            createShoppingList();
        }
    }



    });
});

