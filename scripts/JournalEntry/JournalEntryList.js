import { useJournalEntries } from "./JournalEntryDataProvider.js"
import EntryCard from "./JournalEntry.js"

const JournalEntryList = () => {

    // 1. Get the data from the provider
    // 2. Iterate the array
    // 3. Convert each obj to HTML representation
    // 4. Put in the DOM

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".journal-entry-container")
    const entries = useJournalEntries()

    for (const journalEntryObject of entries) {
        contentElement.innerHTML += EntryCard(journalEntryObject)
    }
}

export default JournalEntryList