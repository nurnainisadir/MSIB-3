function hitung (operator) {
    let form = document.getElementById("calcForm")
    let a1 = parseFloat(form.angka1.value)
    let a2 = parseFloat(form.angka2.value)
    

    

    switch (operator) {
        case 'btn_tambah':
           if (isNaN(a1) || isNaN(a2)) {
            alert("Masukkan Angka!");
           }
           else {
            var total = a1 + a2;
            form.hasil.value = total;
           }
            break;
        case 'btn_kurang':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Masukkan Angka!");
               }
               else {
                var total = a1 - a2;
                form.hasil.value = total;
               } 
            break;
        case 'btn_kali':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Masukkan Angka!");
               }
               else {
                var total = a1 * a2;
                form.hasil.value = total;
               }
            break;
        case 'btn_bagi':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Masukkan Angka!");
               }
               else {
                var total = a1 / a2;
                form.hasil.value = total;
               }
            break;
        case 'btn_pangkat':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Masukkan Angka!");
               }
               else {
                var total = Math.pow (a1,a2);
                form.hasil.value = total;
               }
            break;
        
        default:
            break;
    }
}