'use strict';

//returns an array of article IDs
module.exports = function (data) {
    var ids = [];

    //looping through each entry
    data.forEach(function (element) {
        //add unique article IDs
        if (ids.indexOf(element.articleId) === -1) {
            ids.push(element.articleId);
        }
    });

    return ids;
};