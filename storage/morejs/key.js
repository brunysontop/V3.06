
        function loadMappings() {
            const storedMappings = localStorage.getItem('keyMappings');
            return storedMappings ? JSON.parse(storedMappings) : {};
        }

       
        function saveMappings(mappings) {
            localStorage.setItem('keyMappings', JSON.stringify(mappings));
        }

        const keyMappings = loadMappings(); 

       
        function handleKeyPress(event) {
            const key = event.key.toUpperCase(); 
            const url = keyMappings[key]; 
            if (url) {
                window.location.href = url; 
            }
        }

    
        function addMapping() {
            const key = document.getElementById('key').value.toUpperCase().trim();
            const url = document.getElementById('url').value.trim();

            if (key && url) {
                keyMappings[key] = url;
                saveMappings(keyMappings); 
                alert(`Mapping added: ${key} -> ${url}`);
                document.getElementById('key').value = ''; 
                document.getElementById('url').value = ''; 
            } else {
                alert('Please enter both key and URL.');
            }
        }

        
        document.addEventListener('keydown', handleKeyPress);

       
        document.getElementById('addMapping').addEventListener('click', addMapping);
