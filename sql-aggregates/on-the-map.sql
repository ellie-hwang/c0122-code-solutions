select "countries"."name" as "countries", count("cities".*) as "totalCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
