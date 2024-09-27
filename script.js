document.addEventListener('DOMContentLoaded', () => {
    const corpusList = document.getElementById('corpus-list');
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');

    function renderCorpus(data) {
        corpusList.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'corpus-item';
            div.textContent = item.text;
            corpusList.appendChild(div);
        });
    }

    function filterCorpus() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categorySelect.value;

        const filteredData = corpusData.filter(item => {
            const matchesSearch = item.text.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || 
                (category === 'metaphor' && item.isMetaphor) || 
                (category === 'non-metaphor' && !item.isMetaphor);
            return matchesSearch && matchesCategory;
        });

        renderCorpus(filteredData);
    }

    searchInput.addEventListener('input', filterCorpus);
    categorySelect.addEventListener('change', filterCorpus);

    renderCorpus(corpusData);
<<<<<<< HEAD
});
=======
});
>>>>>>> 4ee36efb8f00f0664264b4d6d3a78df22662fb73
