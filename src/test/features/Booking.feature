Feature: Memilih destinasi tujuan penerbangan

  Scenario: User mencoba login dengan data acak
    Given user membuka halaman login "http://localhost:3000/login"
    When user mengisi email dan password secara otomatis
    And user klik masuk untuk login dengan xpath "//button[normalize-space()='Masuk']"
    Then user diarahkan ke halaman utama "http://localhost:3000/"
    
    And user klik destinasi favorit dengan xpath "//p[normalize-space()='Tangerang -> Los Angeles']"
    And user klik tombol Cari Penerbangan dengan xpath "//button[@class='bg-darkblue4 text-white p-2 rounded-lg']"
    Then user diarahkan ke halaman pilih penerbangan yang mengandung url "http://localhost:3000/users/public/detailPenerbangan"
    When user klik tombol Pilih pada penerbangan dengan xpath "//button[normalize-space()='Pilih']"
    Then user diarahkan ke halaman checkout yang mengandung url "http://localhost:3000/users/private/checkout"
    When user mengisi data penumpang secara otomatis

