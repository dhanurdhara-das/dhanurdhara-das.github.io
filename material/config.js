/*
 * MATERIAL CONFIG
 * ===============
 * Maps password hashes to course folders.
 *
 * HOW TO ADD A NEW COURSE:
 *
 * 1. Choose a password for the course (e.g. "yoga2024")
 *
 * 2. Generate its SHA-256 hash. Run this in your terminal:
 *      echo -n "yoga2024" | shasum -a 256
 *    Or open the browser console and run:
 *      crypto.subtle.digest('SHA-256', new TextEncoder().encode('yoga2024'))
 *        .then(buf => console.log([...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('')))
 *
 * 3. Create a folder inside material/files/ (e.g. material/files/yoga-2024/)
 *
 * 4. Put your PDFs in that folder
 *
 * 5. Add an entry below with the hash as the key:
 *
 *    "your_hash_here": {
 *        title: "Course Title Shown to Students",
 *        files: [
 *            { name: "Display Name.pdf", path: "files/your-folder/actual-filename.pdf" },
 *        ]
 *    },
 */

const MATERIAL_CONFIG = {

    // Password: "example123" → Folder: files/example-course/
    "6165d066d7dca67b64005d450b0d40ea06f58434084c54134d2e77fe190e47a7": {
        title: "Example Course (Demo)",
        files: [
            { name: "Lesson 1 - Introduction.pdf", path: "files/example-course/lesson-1.pdf" },
            { name: "Lesson 2 - Practice Guide.pdf", path: "files/example-course/lesson-2.pdf" },
        ]
    },

    // Password: "aky_ccsv" → Folder: files/aky/
    "b96e7e8a1789be90c64e83bcfbe95b2de352c6b20199993af4210eb37f669cc3": {
        title: "Atma Kriya Yoga - Practitioner Manual",
        files: [
            { name: "AKY Practitioner Manual 2022 (EN).pdf", path: "files/aky/en-AKY-Practitioner-Manual-2022-Print-05-08.pdf" },
            { name: "AKY Manual 2024 (PT).pdf", path: "files/aky/aky-manual-pt-2024.pdf" },
        ]
    },

    // Password: "gita_yajna" → Folder: files/gita/
    "abe19ef0e08f11c6dc5529cb542165a78f0933e4c913c2cb15db33dbce002970": {
        title: "Bhagavad Gita Yagna",
        files: [
            { name: "BG Yagna.pdf", path: "files/gita/BG yagna.pdf" },
        ]
    },

    // To add more courses, follow the steps above and add entries here.
    // Example:
    // "hash_of_another_password": {
    //     title: "Another Course Name",
    //     files: [
    //         { name: "File Name.pdf", path: "files/folder-name/file.pdf" },
    //     ]
    // },

};
