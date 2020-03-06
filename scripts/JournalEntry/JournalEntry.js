const EntryComponent = (journalEntryObject) => {
    return `
    <section id="entryObjContainer" entry--${journalEntryObject.id}>
        <div class ="entry-card">
                <h3>Journal Date: ${journalEntryObject.date}</h3>
                <h5>Concepts Covered: ${journalEntryObject.concept}</h5>
                <p>Journal Entry: ${journalEntryObject.entry}</p>
                <p>Mood for the day: ${journalEntryObject.mood}</p>
        </div>
    </section>
    `
}

export default EntryComponent