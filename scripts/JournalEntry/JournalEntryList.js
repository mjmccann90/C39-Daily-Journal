import { useJournalEntries } from "./JournalEntryDataProvider.js"
import EntryComponent from "./JournalEntry.js"

const contentElement = document.querySelector(".journal-entry-container")

const JournalEntryList = () => {
    const entries = useJournalEntries()

    // 1. Get the data from the provider
    // 2. Iterate the array
    // 3. Convert each obj to HTML representation
    // 4. Put in the DOM

    // Get a reference to the `<article class="content">` element
    let HTMLRepresentation = " "
    for (const journalEntryObject of entries) {
        HTMLRepresentation += EntryComponent(journalEntryObject)
    }
    contentElement.innerHTML = `
    ${HTMLRepresentation}
    `
}

export default JournalEntryList