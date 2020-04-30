/*!
 * json-bootstrap <https://github.com/guilhermecruzdev/json-bootstrap>
 *
 * Copyright (c) 2020, Guilherme Cruz.
 * Licensed under the MIT License.
 */

'use strict'

const he = require('he')

module.exports = {

    alert: (items, type = 'danger') => {
        let html = ''
        items.forEach(function(item) {
            html += '<div class="alert alert-' + type + '" role="alert">'
            html += he.encode(item)
            html += '</div>'
        })
        return html
    },

    card: (title, items) => {
        if (!Array.isArray(items)) {
            items = Array(items)
        }
        let html = ''
        html += '<div class="card">'
        html += '<div class="card-header">'
        html += he.encode(title)
        html += '</div>'
        html += '<ul class="list-group list-group-flush">'
        items.forEach(function(item) {
            html += '<li class="list-group-item">' + he.encode(item) + '</li>'
        })
        html += '</ul>'
        html += '</div>'
        return html
    },

    form: (items) => {
        let html = ''
        items.forEach(function(item) {
            html += '<div class="form-group">'
            html += '<label for="">' + he.encode(item) + '</label>'
            html += '<input class="form-control" value="" />'
            html += '</div>'
        })
        return html
    },

    table: (items) => {
        let html = ''
        html += '<table class="table">'
        html += '<tbody>'
        items.forEach(function(subitems) {
            html += '<tr>'
            subitems.forEach(function(subitem) {
                html += '<td>' + he.encode(subitem) + '</td>'
            })
            html += '<tr>'
        })
        html += '</tbody>'
        html += '</table>'
        return html
    }

}