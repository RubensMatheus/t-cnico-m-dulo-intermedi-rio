$(document).ready(function(){
    $(document).on('click', 'li', function(){
        this.remove();
    });

    function add(){
        var text = $("#addToDo").val()
        $("ul").append('<li><span><i class="fa fa-trash"></i></span>' + text + '</li>')
    }

    $('#addToDo').on('keydown', function(e){
        if(e.keyCode === 13){
            add()
        }
    })
});