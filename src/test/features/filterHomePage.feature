Feature: Memilih destinasi tujuan penerbangan

  Scenario: User memilih salahsatu destinasi tujuan
    Given user membuka halaman utama "http://localhost:3000/"
    When user klik pilihan destinasi favorit dengan xpath "//div[6]//img[1]"
    And user klik Cari Penerbangan dengan xpath "//button[@class='bg-darkblue4 text-white p-2 rounded-lg']"
    Then user redirect ke halaman pilih penerbagnan "http://localhost:3000/users/public/detailPenerbangan?airportIdFrom=0196a5d9-347e-7ff3-83ad-c83e2f2e1342&airportIdTo=0196a5d9-3478-7e72-90f3-4058115ba17c&departureDate=2025-06-15"

  Scenario: User belum login memilih penerbangan
    Given user berada di halaman pilih penerbangan "http://localhost:3000/users/public/detailPenerbangan?airportIdFrom=0196a5d9-347e-7ff3-83ad-c83e2f2e1342&airportIdTo=0196a5d9-3478-7e72-90f3-4058115ba17c&departureDate=2025-06-15"
    When user klik tombol pilih pada pilihan penerbangan dengan xpath "//button[normalize-space()='Pilih']"
    Then user diarahkan ke halaman login "http://localhost:3000/login"
