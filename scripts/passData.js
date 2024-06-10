document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('travelForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const serializedData = {};
        for (const [key, value] of formData.entries()) {serializedData[key] = value;}
        const queryString = Object.keys(serializedData).map(key => key + '=' + 
            encodeURIComponent(serializedData[key])).join('&');
        window.location.href = '/pages/submitted.html?' + queryString;
    });
  });

/// this is what feeds the js within submitted.html, it uses JSON and attaches it to the URL to be able to feed the appropriate fields. 