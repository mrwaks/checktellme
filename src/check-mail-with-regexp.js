"use strict";

/*
Standardizing email syntax requires choosing your address by following a few simple rules:

    - It is not allowed to create an address whose prefix ends with a dot, for example "example.@mail.com".
    - It is not allowed to create an address with several consecutive dots in the middle: "exam...ple@mail.com" is an incorrect address.
    - It is not allowed to create an address whose prefix begins with a period, nor begins or ends with a hyphen (-).
    - You cannot use space, slash (/), backslash (\), semicolon (;), comma (,), at sign (@), "$" or "%", parentheses, brackets ...
    - You cannot use an accent, cedilla, or accented characters.
    - You cannot create an email address starting with a number or consisting only of numbers (type 1234@example.com).
    - Only letters (from A to Z), and numbers (from 0 to 9), dashes (-) and periods (.) Between letters (but without ending with a period) are allowed.
    - The size limit of an email is 254 bytes.

    Note: an address must be created in lowercase. The mail servers do not distinguish the difference between lower case and upper case 
          (exa.mple@mail.com and Exa.MPLE@mail.com correspond to the same e-mail address).
*/


// This version of checkMail () using regular expressions is deprecated on the Safari desktop browser, as well as on virtually all mobile browsers.

const form = document.getElementById("form");
const mail = document.getElementById("mail");

const exts = ["abogado", "academy", "accountant", "accountants", "actor", "adult", "ae", "africa", "agency", "ai", "airforce", "alsace", "amsterdam", "apartments", "app", "archi", "army", "art", "asia", "associates", "at", "attorney", "auction", "audio", "autos", "baby", "band", "bank", "bar", "barcelona", "bargains", "basketball", "bayern", "be", "beauty", "beer", "berlin", "best", "bet", "bible", "bid", "bike", "bingo", "bio", "biz", "biz", "black", "blackfriday", "blog", "blue", "boats", "boston", "boutique", "br.com", "brussels", "build", "builders", "business", "buzz", "bzh", "cab", "cafe", "cam", "camera", "camp", "capetown", "capital", "cards", "care", "career", "careers", "casa", "cash", "casino", "catering", "cc", "cc", "center", "ceo", "cfd", "ch", "charity", "chat", "cheap", "christmas", "church", "city", "claims", "cleaning", "click", "clinic", "clothing", "cloud", "club", "cn", "co", "co", "co.uk", "coach", "codes", "coffee", "college", "cologne", "com", "com.br", "community", "company", "compare", "computer", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "corsica", "country", "coupons", "courses", "credit", "creditcard", "cricket", "cruises", "cymru", "cyou", "cz", "dance", "date", "dating", "de", "deals", "degree", "delivery", "democrat", "dental", "dentist", "desi", "design", "dev", "diamonds", "diet", "digital", "direct", "directory", "discount", "dog", "domains", "download", "durban", "earth", "eco", "education", "email", "energy", "engineer", "engineering", "enterprises", "equipment", "es", "estate", "eu", "eu", "eus", "events", "exchange", "expert", "exposed", "express", "fail", "faith", "family", "fan", "fans", "farm", "fashion", "film", "finance", "financial", "fish", "fishing", "fit", "fitness", "flights", "florist", "flowers", "fm", "football", "forsale", "foundation", "fr", "frl", "fun", "fund", "furniture", "futbol", "fyi", "gal", "gallery", "game", "games", "garden", "gay", "gdn", "gent", "gift", "gifts", "gives", "glass", "global", "gmbh", "gold", "golf", "gr", "graphics", "gratis", "green", "gripe", "group", "guide", "guitars", "guru", "hair", "hamburg", "haus", "health", "healthcare", "help", "hiphop", "hiv", "hockey", "holdings", "holiday", "homes", "horse", "host", "hosting", "house", "how", "icu", "id", "im", "immo", "immobilien", "in", "industries", "info", "info", "ink", "institute", "insure", "international", "investments", "io", "irish", "ist", "istanbul", "it", "jetzt", "jewelry", "jobs", "joburg", "jp", "juegos", "kaufen", "kim", "kitchen", "kiwi", "koeln", "land", "lat", "law", "lawyer", "lease", "legal", "lgbt", "li", "life", "lighting", "limited", "limo", "link", "live", "llc", "loan", "loans", "lol", "london", "lotto", "love", "lt", "ltd", "ltda", "lu", "luxe", "luxury", "ly", "ly", "madrid", "maison", "makeup", "management", "market", "marketing", "markets", "mba", "me", "me", "media", "melbourne", "memorial", "men", "menu", "mg", "miami", "mobi", "mobi", "moda", "moe", "moi", "mom", "money", "monster", "mortgage", "moscow", "motorcycles", "movie", "museum", "mx", "mx", "nagoya", "navy", "net", "network", "news", "ngo", "ninja", "nl", "nowruz", "nrw", "nyc", "nz", "observer", "one", "onl", "online", "ooo", "org", "organic", "osaka", "page", "paris", "partners", "parts", "party", "pe", "pet", "photo", "photography", "photos", "physio", "pics", "pictures", "pink", "pizza", "place", "plumbing", "plus", "pm", "pm", "poker", "porn", "press", "pro", "productions", "promo", "properties", "property", "pt", "pub", "pw", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "re", "realestate", "realty", "recipes", "red", "rehab", "reise", "reisen", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rio", "rip", "rocks", "rodeo", "rugby", "ruhr", "run", "saarland", "sale", "salon", "sarl", "sbs", "school", "schule", "science", "scot", "se", "select", "services", "sex", "sexy", "shiksha", "shoes", "shop", "shopping", "show", "singles", "site", "ski", "skin", "soccer", "social", "software", "solar", "solutions", "soy", "spa", "space", "sport", "srl", "store", "stream", "studio", "study", "style", "sucks", "supplies", "supply", "support", "surf", "surgery", "swiss", "sydney", "systems", "taipei", "tattoo", "tax", "taxi", "team", "tech", "technology", "tel", "tennis", "tf", "tf", "theater", "theatre", "tickets", "tienda", "tips", "tires", "tirol", "today", "tokyo", "tools", "top", "tours", "town", "toys", "trade", "trading", "training", "travel", "trust", "tube", "tv", "tw", "uk", "university", "uno", "us", "us", "vacations", "vegas", "ventures", "versicherung", "vet", "viajes", "video", "villas", "vin", "vip", "vision", "vlaanderen", "vodka", "vote", "voting", "voto", "voyage", "vu", "wales", "wang", "watch", "webcam", "website", "wedding", "wf", "wf", "whoswho", "wien", "wiki", "win", "wine", "work", "works", "world", "ws", "wtf", "xyz", "yachts", "yoga", "yokohama", "yt", "yt", "zone"];
const mailValid = /^(?!.*\.{2})[a-zA-Z]+[\.\w\-\d]*[^\.\-\/\\;,@$%\(\)\[\]{}àâªæáäãåāéèêëęėēûùüúūîïìíįīôœºöòóõøōÿçćčñń$€*`£=+&]@{1}[a-z]{1}[\w\-]*\.{1}[a-z]+$|^(?!.*\.{2})[a-zA-Z]+[\.\w\-\d]*[^\.\-\/\\;,@$%\(\)\[\]{}àâªæáäãåāéèêëęėēûùüúūîïìíįīôœºöòóõøōÿçćčñń$€*`£=+&]@{1}[a-z]{1}[\w\-]*\.{1}[a-z]+\.{1}[a-z]+$/;
const extUser = /(?<=[a-z]\.)[a-zA-Z]+$|(?<=[a-z]\.)[a-zA-Z]+\.[a-zA-Z]+$/; // Match the extension domain name after the dot. (com, fr, eu...).
const maxBytes = 254;

window.onload = () => {
    mail.focus();
}

const checkMail = () => {
    let res;
    if (mailValid.test(mail.value.toLowerCase()) && mail.value.length <= maxBytes) {
        const extValue = mail.value.toLowerCase().match(extUser).join("");
        for (let i in exts) {
            if (exts[i] === extValue) {
                res = true;
                break;
            }
            if (!exts[i] === true) {
                res = false;
            }
        }
        return res;
    } else {
        return false;
    }
}