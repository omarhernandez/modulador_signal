    $("input.fetchSeries").click(function () {
        var button = $(this);
        
        // find the URL in the link right next to us 
        var dataurl = button.siblings('a').attr('href');

        // then fetch the data with jQuery
        function onDataReceived(series) {
            // extract the first coordinate pair so you can see that
            // data is now an ordinary Javascript object
            var firstcoordinate = '(' + series.data[0][0] + ', ' + series.data[0][1] + ')';

            button.siblings('span').text('Fetched ' + series.label + ', first point: ' + firstcoordinate);

            // let's add it to our current data
            if (!alreadyFetched[series.label]) {
                alreadyFetched[series.label] = true;
                data.push(series);
            }
            
            // and plot all we got
            $.plot(placeholder, data, options);
         }
        
        $.ajax({
            url: dataurl,
            method: 'GET',
            dataType: 'json',
            success: onDataReceived
        });
    });