const EntryCard = (journalEntryObject) => {
    return `
        <div class ="entryBackground">
                <h2>Journal Date: ${journalEntryObject.date}</h2>
                <h3>Concepts Covered: ${journalEntryObject.concept}</h3>
                <p>Journal Entry: ${journalEntryObject.entry}</p>
                <h3>Mood for the day: ${journalEntryObject.mood}</h3>
        </div>
    `
}

export default EntryCard