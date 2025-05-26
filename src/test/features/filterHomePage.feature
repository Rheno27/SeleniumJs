Feature: Mengisi filter HomePage

  Scenario: User memilih bandara asal
    Given user membuka halaman utama "http://localhost:3000/"
    When user klik pilihan bandara asal "//button[normalize-space()='Soekarno-Hatta International Airport']"
    And user pilih Soekarno-Hatta International Airport dengan xpath "//span[normalize-space()='Soekarno-Hatta International Airport']"
    Then user melihat konfirmasi bandara asal muncul "//button[normalize-space()='Soekarno-Hatta International Airport']"

  Scenario: User memilih bandara tujuan
    Given user membuka halaman utama "http://localhost:3000/"
    When user klik pilihan bandara tujuan "//button[normalize-space()='Sydney Airport']"
    And user pilih Sydney Airport dengan xpath "//span[normalize-space()='Sydney Airport']"
    Then user melihat konfirmasi bandara tujuan muncul "//button[normalize-space()='Sydney Airport']"

  Scenario: User memilih tanggal keberangkatan
    Given user membuka halaman utama "http://localhost:3000/"
    When user klik pilihan tanggal keberangkatan "//button[normalize-space()='4 - Juni - 2025']"
    And user klik pindah bulan "//button[@name='next-month']"
    And user pilih tanggal 17 juni "//button[normalize-space()='17']"
    And user klik tombol x ".MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.cursor-pointer.css-1umw9bq-MuiSvgIcon-root"
    Then user melihat konfirmasi tanggal keberangkatan "//button[normalize-space()='17 - Juni - 2025']"

  Scenario: User melihat jumlah penumpang default
    Given user membuka halaman utama "http://localhost:3000/"
    Then user melihat jumlah penumpang 1 "//button[normalize-space()='1 Penumpang']"

  Scenario: User memilih kelas kursi
    Given user membuka halaman utama "http://localhost:3000/"
    When user klik kelas kursi "//button[normalize-space()='PREMIUM_ECONOMY']"
    And user pilih Premium Economy dengan xpath "//span[normalize-space()='Premium Economy']"
    And user klik tombol x ".MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.cursor-pointer.css-1umw9bq-MuiSvgIcon-root"
    Then user melihat konfirmasi kelas kursi "//button[normalize-space()='PREMIUM_ECONOMY']"
