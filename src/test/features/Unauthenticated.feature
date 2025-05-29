Feature: Memilih destinasi tujuan penerbangan

  Scenario: User belum login memilih salahsatu destinasi tujuan
    Given user membuka halaman utama "http://localhost:3000/"
    When user klik pilihan destinasi favorit dengan xpath "//div[6]//img[1]"
    And user klik Cari Penerbangan dengan xpath "//button[@class='bg-darkblue4 text-white p-2 rounded-lg']"
    Then user redirect ke halaman pilih penerbangan "http://localhost:3000/users/public/detailPenerbangan?airportIdFrom=0196a5d9-347e-7ff3-83ad-c83e2f2e1342&airportIdTo=0196a5d9-3478-7e72-90f3-4058115ba17c&departureDate=2025-06-15"

  Scenario: User belum login memilih penerbangan
    Given user berada di halaman pilih penerbangan "http://localhost:3000/users/public/detailPenerbangan?airportIdFrom=0196a5d9-347e-7ff3-83ad-c83e2f2e1342&airportIdTo=0196a5d9-3478-7e72-90f3-4058115ba17c&departureDate=2025-06-15"
    When user klik tombol pilih pada pilihan penerbangan dengan xpath "//button[normalize-space()='Pilih']"
    Then user diarahkan ke halaman login "http://localhost:3000/login"

  Scenario: User melakukan login
    Given user membuka halaman utama "http://localhost:3000/login"
    When user mengisi email "admin@gmail.com" dengan xpath "//input[@id='email']"
    And user mengisi password "1234567890" dengan xpath "//input[@id='password']"
    And user klik masuk untuk login dengan xpath "//button[normalize-space()='Masuk']"
    Then user redirect ke halaman utama "http://localhost:3000/"

  Scenario: User setelah login memilih salahsatu destinasi tujuan
    Given user membuka halaman utama "http://localhost:3000/"
    When user klik pilihan destinasi favorit dengan xpath "//div[6]//img[1]"
    And user klik Cari Penerbangan dengan xpath "//button[@class='bg-darkblue4 text-white p-2 rounded-lg']"
    Then user redirect ke halaman pilih penerbangan "http://localhost:3000/users/public/detailPenerbangan?airportIdFrom=0196a5d9-347e-7ff3-83ad-c83e2f2e1342&airportIdTo=0196a5d9-3478-7e72-90f3-4058115ba17c&departureDate=2025-06-15"
  
  Scenario: User sudah login memilih penerbangan
    Given user berada di halaman pilih penerbangan "http://localhost:3000/users/public/detailPenerbangan?airportIdFrom=0196a5d9-347e-7ff3-83ad-c83e2f2e1342&airportIdTo=0196a5d9-3478-7e72-90f3-4058115ba17c&departureDate=2025-06-15"
    When user klik tombol pilih pada pilihan penerbangan dengan xpath "//button[normalize-space()='Pilih']"
    Then user diarahkan ke halaman checkout "http://localhost:3000/users/private/checkout"
    And user klik nama sapaan dengan xpath "//select[@placeholder='Pilih `Title`']"
    And user memilih nama sapaan "Mr" dengan xpath "//option[@value='Mr']" 
    And user mengisi nama depan "Rheno" dengan xpath "//input[@placeholder='Masukkan Nama Depan']"
    And user mengisi nama belakang "Julius" dengan xpath "//input[@placeholder='Masukkan Nama Belakang']"
    And user memilih tanggal  "07/27/2005" dengan xpath "//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[5]/input[1]"
    And user mengisi kewarganegaraan "indonesia" dengan xpath "//input[@placeholder='Pilih Kewarganegaraan']"
    And user memilih kewarganegaraan dengan xpath "(//div[@class='stdropdown-item false'])[1]"
    And user memasukan no paspor/no ktp "0123456789123456" dengan xpath "//input[@placeholder='Masukkan No. KTP/Paspor']"
    And user mengisi tanggal berlaku "09/27/2025" dengan xpath "//div[8]//input[1]"
    And user mengisi asal negara "indonesia" dengan xpath "//input[@placeholder='Pilih Asal Negara']"
    And user memilih asal negara "indonesia" dengan xpath "(//div[@class='stdropdown-item false'])[1]"
    And user memilih kursi dengan xpath "//label[@for='0196a5d9-3606-70f3-859a-13fe2838a558']"
    And user klik lanjut bayar dengan xpath "//button[normalize-space()='Lanjutkan ke Pembayaran']"
    Then user diarahkan ke halaman pembayaran "http://localhost:3000/users/private/payment/(disini aku masih bingung karena id payment digenerate secara otomatis)"