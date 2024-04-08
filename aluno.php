<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        // Recebe as notas e a frequência do formulário
        $p1 = floatval($_POST['primeiraProva']);
        $p2 = floatval($_POST['segundaProva']);
        $ai1 = floatval($_POST['avaliacaoInterdisciplinar']);
        $ai2 = floatval($_POST['segundaAvalicaoInterdisciplinar']);
        $frequencia = floatval($_POST['frequencia']);

        // Calcula a média
        $media = (($p1 + $ai1) + ($p2 + $ai2)) / 2;

        // Determina a situação final do aluno
        if ($media >= 6 && $frequencia >= 75) {
            $situacao = "Aprovado";
        } 
        
        elseif ($media >= 6 && $frequencia < 75) {
            $situacao = "Reprovado por frequência";
        } 
        
        elseif ($media < 6 && $frequencia >= 75) {
            $situacao = "Reprovado por nota";
        } 
        
        else {
            $situacao = "Reprovado por nota e frequência";
        }

        // Exibe a média e a situação final do aluno
        echo "<div class='resultado'>";
        echo "<h2>Média Final: $media</h2>";
        echo "<h2>Situação Final: $situacao</h2>";
        echo "</div>";
}

?>