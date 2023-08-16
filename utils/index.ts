import { CarProps, FilterProps } from "@/types";

export async function fetchCars() {
    // const headers = {
    //     'X-RapidAPI-Key': '4a73b03bc4msh44878d00f6b4e71p116a81jsnd7fb26bdf860',
    //      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    // }

    // const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
    //     headers: headers,
    // });

    const headers = {
        'X-API-Key': '9LhPF7VDSQqak2q++66SVA==GDlcDgZ1eZVFulRi'
    }

    const response = await fetch('https://api.api-ninjas.com/v1/cars?model=q3',{
        headers: headers,
    });
    
    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 1000; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', "fullscreens");
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}