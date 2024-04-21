import countries from "world-countries";

const formatttedCountries=countries.map((country)=>({
    value:country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng:country.latlng,
    region:country.region
}));

const useCountries=()=>{
    const getAll=()=> formatttedCountries;

    const getByValue=(value:string)=>{
        return formatttedCountries.find((item)=>item.value==value);
    }

    return{
        getAll,
        getByValue
    }
};

export default useCountries;