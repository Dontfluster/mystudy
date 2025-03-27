$(document).ready(function () {
    // 문서가 준비되었을때 펑션(함수) 실행된다는 뜻
    if ($.localStorage.isSet('memo')) {
        // 만약 저장되어있다면 메모를 불러와라
        $('.tarea').val($.localStorage.get('memo'));
    }
    
    $(".btn_area").click(function () {
        // 저장버튼을 클릭했을때 실행행
        $.localStorage.set('memo', $('.tarea').val());
        // 내 하드에 저장한다다
        alert('저장이 되었습니다.');
    });
});