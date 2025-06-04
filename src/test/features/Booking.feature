Feature: Memilih destinasi tujuan penerbangan

  Scenario: User berhasil login dan memesan tiket penerbangan

    Given user membuka halaman login "http://localhost:3000/login"
    When user mengisi email "admin@gmail.com" dengan xpath "//input[@id='email']"
    And user mengisi password "1234567890" dengan xpath "//input[@id='password']"
    And user klik masuk untuk login dengan xpath "//button[normalize-space()='Masuk']"
    Then user diarahkan ke halaman utama "http://localhost:3000/"
    
    And user klik destinasi favorit dengan xpath "//p[normalize-space()='Sydney -> Tangerang']"
    And user klik tombol Cari Penerbangan dengan xpath "//button[@class='bg-darkblue4 text-white p-2 rounded-lg']"
    Then user diarahkan ke halaman pilih penerbangan yang mengandung url "http://localhost:3000/users/public/detailPenerbangan"
    When user klik tombol Pilih pada penerbangan dengan xpath "//button[normalize-space()='Pilih']"
    Then user diarahkan ke halaman checkout yang mengandung url "http://localhost:3000/users/private/checkout"
    When user klik nama sapaan dengan xpath "//select[@placeholder='Pilih `Title`']"
    And user memilih nama sapaan "Mr" dengan xpath "//option[@value='Mr']"
    And user mengisi nama depan "Rheno" dengan xpath "//input[@placeholder='Masukkan Nama Depan']"
    And user mengisi nama belakang "Julius" dengan xpath "//input[@placeholder='Masukkan Nama Belakang']"
    And user mengisi tanggal lahir "07272005" dengan xpath "//div[5]//input[1]" 
    And user klik kewarganegaraan dengan xpath "//input[@placeholder='Pilih Kewarganegaraan']"
    And user memilih kewarganegaraan dari dropdown dengan index xpath "(//div[@class='stdropdown-item false'])[1]"
    And user mengisi no KTP/paspor "0123456789123456" dengan xpath "//input[@placeholder='Masukkan No. KTP/Paspor']"
    And user mengisi tanggal berlaku "09/27/2025" dengan xpath "//div[8]//input[1]"
    And user klik asal negara dengan xpath "//input[@id='country-origin']"
    And user memilih asal negara dari dropdown dengan xpath "(//div[@class='stdropdown-item false'])[2]"
    And user memilih kursi dengan xpath "//label[normalize-space()='A1']"
    And user klik tombol "Lanjutkan ke Pembayaran" dengan xpath "//button[normalize-space()='Lanjutkan ke Pembayaran']"
    Then user diarahkan ke halaman pembayaran yang mengandung "/users/private/payment/"
