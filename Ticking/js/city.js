var cityPicker = new IIInsomniaCityPicker({
        data: cityData,
        target: '#cityChoice',
        valType: 'k-v',
        hideCityInput: '#city',
        hideProvinceInput: '#province',
        callback: function(city_id){
            console.log(city_id);
        }
    });
    
var cityPicker1 = new IIInsomniaCityPicker({
        data: cityData,
        target: '#cityChoice1',
        valType: 'k-v',
        hideCityInput: '#city',
        hideProvinceInput: '#province',

        callback: function(city_id){
            console.log(city_id);
        }
    });
    
var cityPicker2 = new IIInsomniaCityPicker({
        data: cityData,
        target: '#cityChoice2',
        valType: 'k-v',
        hideCityInput: '#city',
        hideProvinceInput: '#province',
        callback: function(city_id){
            console.log(city_id);
        }
    });
    
var cityPicker3 = new IIInsomniaCityPicker({
        data: cityData,
        target: '#cityChoice3',
        valType: 'k-v',
        hideCityInput: '#city',
        hideProvinceInput: '#province',

        callback: function(city_id){
            console.log(city_id);
        }
    });
    cityPicker.init(0);
    cityPicker1.init(1);
    cityPicker2.init(0);
    cityPicker3.init(1);