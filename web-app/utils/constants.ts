// export const API_URL = "https://api.coincap.io/v2/assets";

export const BASE_API_URL = "https://api.coingecko.com/api/v3";

export const currencySymbols: Record<string, { symbol: string; name: string }> = {
      "AED": { "symbol": "د.إ", "name": "United Arab Emirates Dirham" },
      "AFN": { "symbol": "؋", "name": "Afghan Afghani" },
      "ALL": { "symbol": "L", "name": "Albanian Lek" },
      "AMD": { "symbol": "֏", "name": "Armenian Dram" },
      "ANG": { "symbol": "ƒ", "name": "Netherlands Antillean Guilder" },
      "AOA": { "symbol": "Kz", "name": "Angolan Kwanza" },
      "ARS": { "symbol": "$", "name": "Argentine Peso" },
      "AUD": { "symbol": "$", "name": "Australian Dollar" },
      "AWG": { "symbol": "ƒ", "name": "Aruban Florin" },
      "AZN": { "symbol": "₼", "name": "Azerbaijani Manat" },
      "BAM": { "symbol": "KM", "name": "Bosnia and Herzegovina Convertible Mark" },
      "BBD": { "symbol": "$", "name": "Barbados Dollar" },
      "BDT": { "symbol": "৳", "name": "Bangladeshi Taka" },
      "BGN": { "symbol": "лв", "name": "Bulgarian Lev" },
      "BHD": { "symbol": ".د.ب", "name": "Bahraini Dinar" },
      "BIF": { "symbol": "FBu", "name": "Burundian Franc" },
      "BMD": { "symbol": "$", "name": "Bermudian Dollar" },
      "BND": { "symbol": "$", "name": "Brunei Dollar" },
      "BOB": { "symbol": "Bs.", "name": "Bolivian Boliviano" },
      "BRL": { "symbol": "R$", "name": "Brazilian Real" },
      "BSD": { "symbol": "$", "name": "Bahamian Dollar" },
      "BTN": { "symbol": "Nu.", "name": "Bhutanese Ngultrum" },
      "BWP": { "symbol": "P", "name": "Botswana Pula" },
      "BYN": { "symbol": "Br", "name": "Belarusian Ruble" },
      "BZD": { "symbol": "$", "name": "Belize Dollar" },
      "CAD": { "symbol": "$", "name": "Canadian Dollar" },
      "CDF": { "symbol": "FC", "name": "Congolese Franc" },
      "CHF": { "symbol": "CHF", "name": "Swiss Franc" },
      "CLP": { "symbol": "$", "name": "Chilean Peso" },
      "CNY": { "symbol": "¥", "name": "Chinese Yuan" },
      "COP": { "symbol": "$", "name": "Colombian Peso" },
      "CRC": { "symbol": "₡", "name": "Costa Rican Colón" },
      "CUP": { "symbol": "₱", "name": "Cuban Peso" },
      "CVE": { "symbol": "$", "name": "Cape Verdean Escudo" },
      "CZK": { "symbol": "Kč", "name": "Czech Koruna" },
      "DJF": { "symbol": "Fdj", "name": "Djiboutian Franc" },
      "DKK": { "symbol": "kr", "name": "Danish Krone" },
      "DOP": { "symbol": "$", "name": "Dominican Peso" },
      "DZD": { "symbol": "د.ج", "name": "Algerian Dinar" },
      "EGP": { "symbol": "£", "name": "Egyptian Pound" },
      "ERN": { "symbol": "Nfk", "name": "Eritrean Nakfa" },
      "ETB": { "symbol": "Br", "name": "Ethiopian Birr" },
      "EUR": { "symbol": "€", "name": "Euro" },
      "FJD": { "symbol": "$", "name": "Fijian Dollar" },
      "FKP": { "symbol": "£", "name": "Falkland Islands Pound" },
      "FOK": { "symbol": "kr", "name": "Faroese Króna" },
      "GBP": { "symbol": "£", "name": "British Pound Sterling" },
      "GEL": { "symbol": "₾", "name": "Georgian Lari" },
      "GGP": { "symbol": "£", "name": "Guernsey Pound" },
      "GHS": { "symbol": "₵", "name": "Ghanaian Cedi" },
      "GIP": { "symbol": "£", "name": "Gibraltar Pound" },
      "GMD": { "symbol": "D", "name": "Gambian Dalasi" },
      "GNF": { "symbol": "FG", "name": "Guinean Franc" },
      "GTQ": { "symbol": "Q", "name": "Guatemalan Quetzal" },
      "GYD": { "symbol": "$", "name": "Guyanese Dollar" },
      "HKD": { "symbol": "$", "name": "Hong Kong Dollar" },
      "HNL": { "symbol": "L", "name": "Honduran Lempira" },
      "HRK": { "symbol": "kn", "name": "Croatian Kuna" },
      "HTG": { "symbol": "G", "name": "Haitian Gourde" },
      "HUF": { "symbol": "Ft", "name": "Hungarian Forint" },
      "IDR": { "symbol": "Rp", "name": "Indonesian Rupiah" },
      "ILS": { "symbol": "₪", "name": "Israeli New Shekel" },
      "IMP": { "symbol": "£", "name": "Isle of Man Pound" },
      "INR": { "symbol": "₹", "name": "Indian Rupee" },
      "IQD": { "symbol": "ع.د", "name": "Iraqi Dinar" },
      "IRR": { "symbol": "﷼", "name": "Iranian Rial" },
      "ISK": { "symbol": "kr", "name": "Icelandic Króna" },
      "JEP": { "symbol": "£", "name": "Jersey Pound" },
      "JMD": { "symbol": "$", "name": "Jamaican Dollar" },
      "JOD": { "symbol": "د.ا", "name": "Jordanian Dinar" },
      "JPY": { "symbol": "¥", "name": "Japanese Yen" },
      "KES": { "symbol": "Sh", "name": "Kenyan Shilling" },
      "KGS": { "symbol": "с", "name": "Kyrgyzstani Som" },
      "KHR": { "symbol": "៛", "name": "Cambodian Riel" },
      "KID": { "symbol": "$", "name": "Kiribati Dollar" },
      "KMF": { "symbol": "Fr", "name": "Comorian Franc" },
      "KRW": { "symbol": "₩", "name": "South Korean Won" },
      "KWD": { "symbol": "د.ك", "name": "Kuwaiti Dinar" },
      "KYD": { "symbol": "$", "name": "Cayman Islands Dollar" },
      "KZT": { "symbol": "₸", "name": "Kazakhstani Tenge" },
      "LAK": { "symbol": "₭", "name": "Lao Kip" },
      "LBP": { "symbol": "ل.ل", "name": "Lebanese Pound" },
      "LKR": { "symbol": "Rs", "name": "Sri Lankan Rupee" },
      "LRD": { "symbol": "$", "name": "Liberian Dollar" },
      "LSL": { "symbol": "L", "name": "Lesotho Loti" },
      "LYD": { "symbol": "ل.د", "name": "Libyan Dinar" },
      "MAD": { "symbol": "د.م.", "name": "Moroccan Dirham" },
      "MDL": { "symbol": "L", "name": "Moldovan Leu" },
      "MGA": { "symbol": "Ar", "name": "Malagasy Ariary" },
      "MKD": { "symbol": "ден", "name": "Macedonian Denar" },
      "MMK": { "symbol": "K", "name": "Myanmar Kyat" },
      "MNT": { "symbol": "₮", "name": "Mongolian Tögrög" },
      "MOP": { "symbol": "P", "name": "Macanese Pataca" },
      "MRU": { "symbol": "UM", "name": "Mauritanian Ouguiya" },
      "MUR": { "symbol": "₨", "name": "Mauritian Rupee" },
      "MVR": { "symbol": "ރ.", "name": "Maldivian Rufiyaa" },
      "MWK": { "symbol": "MK", "name": "Malawian Kwacha" },
      "MXN": { "symbol": "$", "name": "Mexican Peso" },
      "MYR": { "symbol": "RM", "name": "Malaysian Ringgit" },
      "MZN": { "symbol": "MT", "name": "Mozambican Metical" },
      "NAD": { "symbol": "$", "name": "Namibian Dollar" },
      "NGN": { "symbol": "₦", "name": "Nigerian Naira" },
      "NIO": { "symbol": "C$", "name": "Nicaraguan Córdoba" },
      "NOK": { "symbol": "kr", "name": "Norwegian Krone" },
      "NPR": { "symbol": "रु", "name": "Nepalese Rupee" },
      "NZD": { "symbol": "$", "name": "New Zealand Dollar" },
      "OMR": { "symbol": "ر.ع.", "name": "Omani Rial" },
      "PAB": { "symbol": "B/.", "name": "Panamanian Balboa" },
      "PEN": { "symbol": "S/", "name": "Peruvian Sol" },
      "PGK": { "symbol": "K", "name": "Papua New Guinean Kina" },
      "PHP": { "symbol": "₱", "name": "Philippine Peso" },
      "PKR": { "symbol": "₨", "name": "Pakistani Rupee" },
      "PLN": { "symbol": "zł", "name": "Polish Złoty" },
      "PYG": { "symbol": "₲", "name": "Paraguayan Guaraní" },
      "QAR": { "symbol": "ر.ق", "name": "Qatari Riyal" },
      "RON": { "symbol": "lei", "name": "Romanian Leu" }
  }
