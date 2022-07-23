<script>
	const apiKey = '242ac63bb227a6e15c4c2da3af2251d5';

	const date = new Date().getTime();
	const formatDate = (day) => {
		const addedDayInSecond = 86400 * day;
		return new Date(date + addedDayInSecond).toLocaleDateString();
	};

	const weatherJSONString = localStorage.getItem('weather') || '{}';
	let weatherParsed = JSON.parse(weatherJSONString);

	let { dailyForecast } = weatherParsed;
	let cityCurWeather, cityCurName, citySearchInput, searchMessage;

	async function searchCity(city_name = citySearchInput, limit = 5, api_key = apiKey) {
		const result = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${limit}&appid=${api_key}`
		).then((response) => response.json());
		const city = result[0];
		if (city) {
			cityCurName = city.name;
			const history = weatherParsed.history || [];
			history.push(city);

			fetchWeather(city.lat, city.lon);

			weatherParsed = { ...weatherParsed, history: history.slice(-8) };
			console.log(weatherParsed);
			localStorage.setItem('weather', JSON.stringify(weatherParsed));
		} else {
			searchMessage = 'No city found';
			setTimeout(() => (searchMessage = ''), 1500);
		}
	}
	async function fetchWeather(lat, lon, api_key = apiKey) {
		const result = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
		).then((response) => response.json());
		cityCurWeather = result.current;
		dailyForecast = result.daily;
		weatherParsed.dailyForecast = dailyForecast;
		localStorage.setItem('weather', JSON.stringify(weatherParsed));
	}
	function citiesWrapperClickHandler({ target }) {
		if (target === this) return;
		cityCurName = target.textContent;
		const lat = target.dataset.lat;
		const lon = target.dataset.lon;
		fetchWeather(lat, lon);
	}
	function uviIndex(uvi) {
		// uvi = uvi * 10;
		const inrange = (num, low, high) => {
			return low <= num && num <= high;
		};
		if (inrange(uvi, 1, 2)) return 'low';
		if (inrange(uvi, 3, 5)) return 'moderate';
		if (inrange(uvi, 6, 7)) return 'high';
		if (inrange(uvi, 8, 10)) return 'veryhigh';
		if (inrange(uvi, 11, Infinity)) return 'extreme';
	}
</script>

<header>
	<h1>Weather Dashboard</h1>
</header>
<main>
	<aside>
		<h1>Search for a City:</h1>
		<div class="search-wrapper">
			<input
				on:keypress={({ key }) => key === 'Enter' && searchCity()}
				type="text"
				class="search-box"
				placeholder="San Diego"
				bind:value={citySearchInput}
			/>
			<button on:click={() => searchCity()}>Search</button>
			<div class="search--message">{searchMessage || ''}</div>
		</div>
		<div class="history" on:click={citiesWrapperClickHandler}>
			{#if weatherParsed.history}
				{#each [...weatherParsed.history].reverse() as { name, lat, lon }}
					<button data-lat={lat} data-lon={lon}>{name}</button>
				{/each}
			{:else}
				<button data-lat="30.2711286" data-lon="-97.7436995">Austin</button>
				<button data-lat="41.8755616" data-lon="-87.6244212">Chicago</button>
				<button data-lat="40.7127281" data-lon="-74.0060152">New York</button>
				<button data-lat="28.5421109" data-lon="-81.3790304">Orlando</button>
				<button data-lat="37.7790262" data-lon="-122.419906">San Francisco</button>
				<button data-lat="38.8879957" data-lon="-76.8987649">Seat Pleasant</button>
				<button data-lat="39.7392364" data-lon="-104.9848623">Denver</button>
				<button data-lat="33.7489924" data-lon="-84.3902644">Atlanta</button>
			{/if}
		</div>
	</aside>

	<div class="display">
		<div class="weather-info">
			<h1>
				<!-- {cityCurName || weatherParsed.history?.pop().name || ''} -->
			</h1>
			{#if cityCurWeather}
				{@const { temp, humidity, uvi, wind_speed } = cityCurWeather}
				<p>Temp: {temp} °F</p>
				<p>Wind: {wind_speed} MPH</p>
				<p>Humidity: {humidity}%</p>
				<p>UV Index: <span class="uv-index {uviIndex(uvi)}">{uvi}</span></p>
			{/if}
		</div>

		<div class="forecast">
			{#if dailyForecast}
				{@const length = 5}
				<h1 class="forecast-title">{length}-Day Forecast:</h1>
				<div class="forecast-days">
					{#each dailyForecast.splice(0, length) as { temp, humidity, uvi, wind_speed, weather }, index}
						{@const tempValues = Object.values(temp)}
						{@const average_temp = tempValues.reduce((a, b) => a + b) / tempValues.length}
						<div class="forcast-item">
							<div class="date">{formatDate(index + 1)}</div>
							<img
								class="weather-icon"
								src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
								alt=""
							/>
							<div class="temperature">Temp: {average_temp.toFixed(1)} °F</div>
							<div class="wind_speed">Wind: {wind_speed} MPH</div>
							<div class="Humidity">Humidity: {humidity}%</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</main>

<style lang="scss">
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		box-sizing: border-box;
	}
	:root {
		--background-primary: rgb(24, 143, 255);
		--color-primary: white;

		--background-secondary: gray;
		--color-secondary: black;

		--flex-gap: 15px;
	}
	h1 {
		margin: 0;
	}
	header {
		display: flex;
		justify-content: center;
		background: linear-gradient(
			270deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 9, 121, 1) 35%,
			rgba(0, 212, 255, 1) 100%
		);
		margin-bottom: 10px;
		h1 {
			font-size: 1.7rem;
			margin-bottom: 12px;
			color: white;
		}
	}
	main {
		display: flex;
		aside,
		.display {
			padding: 0 20px 20px 20px;
		}
		aside {
			&,
			& .search-wrapper,
			& .history {
				display: flex;
				flex-direction: column;
				gap: var(--flex-gap);
			}
			height: 100%;
			width: 350px;
			// background-color: blue;

			button,
			input {
				display: block;
				width: 100%;
				border-radius: 3px;
				outline: none;
				// flex: 1;
				// width: 100%;
			}
			input {
				padding: 5px;
				// height: 40px;
				padding: 10px;
				border-radius: 5px;
			}
			button {
				height: 30px;
				border: none;
				cursor: pointer;
			}
			.search-wrapper {
				&::after {
					display: block;
					content: '';
					background-color: var(--background-secondary);
					height: 2px;
					width: 100%;
				}
				button {
					background-color: var(--background-primary);
					color: var(--color-primary);
				}
				.search-box {
					display: block;
				}
				.search--message {
					color: gray;
					&:empty {
						display: none;
					}
				}
			}
			.history {
				// all: inherit;
				button {
					border-color: var(--background-secondary);
					color: var(--color-secondary);
				}
			}
		}
		.display {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: var(--flex-gap);
			.weather-info {
				border: 1px solid gray;
				min-height: 170px;
				padding: 10px;
				border-radius: 3px;
				.uv-index {
					&:global(.low) {
						background-color: rgb(131, 200, 139);
					}
					&:global(.moderate) {
						background-color: rgb(255, 220, 1);
					}
					&:global(.high) {
						background-color: rgb(245, 154, 28);
					}
					&:global(.veryhigh) {
						background-color: rgb(238, 29, 35);
					}
					&:global(.extreme) {
						background-color: rgb(216, 52, 132);
					}
				}
				// width: 100%;
			}
			.forecast {
				h1 {
					font-size: 1.3rem;
					line-height: 1.8em;
				}
				.forecast-days {
					display: flex;
					gap: 20px;
					flex-wrap: wrap;
					.forcast-item {
						width: 200px;
						height: 160px;
						padding: 20px;
						box-sizing: content-box;
						border-radius: 13px;
						background-color: navy;
						color: var(--color-primary);
						.weather-icon {
							height: 3em;
						}
						/* padding: 5px; */
						/* padding-right: 20px;
						padding-bottom: 15px; */
					}
				}
			}
		}
	}
</style>
