<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $topic_code = $_POST['topic'] ?? '';
    $message    = htmlspecialchars($_POST['message'] ?? '');
    $email      = htmlspecialchars($_POST['email'] ?? '');

    $topics = [
        "support" => "Интеллектуальная собственность",
        "order"   => "Потребительский экстремизм",
        "coop"    => "Защита прав потребителя",
        "realty"  => "Оформление собственности",
        "garage"  => "Гаражная амнистия",
        "expert"  => "Исследования и экспертизы",
        "civil"   => "Гражданский процесс",
        "other"   => "Иные вопросы"
    ];

    // empty field 
    if (empty($topic_code) || empty($email) || empty($message)) {
        echo "<script>alert('Ошибка: заполните все поля!'); window.history.back();</script>";
        exit;
    }

    $topic = $topics[$topic_code] ?? "Неизвестная тема";

    echo "<h2>Форма отправлена!</h2>";
    echo "Тема: $topic <br>";
    echo "Email: $email <br>";
    echo "Сообщение:<br><pre>$message</pre>";
}
?>