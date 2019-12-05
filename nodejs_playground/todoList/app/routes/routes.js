'use strict';
module.exports = function(app) {
    var todoListController = require('../controller/controller');

    // todoList Routes
    app.route('/tasks')
        .get(todoListController.list_all_tasks)
        .post(todoListController.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoListController.read_a_task)
        .put(todoListController.update_a_task)
        .delete(todoListController.delete_a_task);
};
