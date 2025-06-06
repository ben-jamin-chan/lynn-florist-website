# Google Maps Setup Guide

This guide will help you set up Google Maps integration for your florist website's contact page.

## Prerequisites

1. A Google Cloud Platform account
2. A Google Maps API key with the Maps JavaScript API enabled

## Step 1: Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Maps JavaScript API** for your project:
   - Go to "APIs & Services" > "Library"
   - Search for "Maps JavaScript API"
   - Click on it and press "Enable"

4. Create an API key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key

## Step 2: Configure the API Key

### Option 1: Using Environment Variables (Recommended)

1. Create a `.env` file in your project root:
   ```bash
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

2. Add `.env` to your `.gitignore` file to keep your API key secure

### Option 2: Direct Configuration

1. Open `src/config/maps.js`
2. Replace `'YOUR_GOOGLE_MAPS_API_KEY'` with your actual API key:
   ```javascript
   apiKey: 'your_actual_api_key_here',
   ```

## Step 3: Customize Your Location

1. Open `src/config/maps.js`
2. Update the `location` coordinates to match your actual florist shop location:
   ```javascript
   location: {
     lat: 3.1390, // Replace with your latitude
     lng: 101.6869 // Replace with your longitude
   }
   ```

3. You can find your coordinates using [Google Maps](https://maps.google.com/):
   - Search for your address
   - Right-click on the location
   - Click on the coordinates to copy them

## Step 4: Customize the Marker

1. In `src/config/maps.js`, update the `FLORIST_MARKER` configuration:
   ```javascript
   export const FLORIST_MARKER = {
     position: GOOGLE_MAPS_CONFIG.location,
     title: "Your Florist Shop Name",
     info: "Your custom description"
   }
   ```

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact page
3. You should see an interactive Google Map with a marker at your specified location

## Security Notes

- **Never commit your API key to version control**
- Consider restricting your API key to specific domains in production
- Monitor your API usage in the Google Cloud Console

## Troubleshooting

### Map not loading?
- Check that your API key is correct
- Ensure the Maps JavaScript API is enabled
- Check the browser console for error messages

### Marker not showing?
- Verify your coordinates are correct
- Check that the marker configuration is properly exported

### Want to customize the map style?
- Update the `styles` array in `GOOGLE_MAPS_CONFIG`
- Use [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/) for custom styles

## Additional Features

The Google Maps component supports:
- Custom markers
- Map styling
- Loading states
- Error handling
- Responsive design

For more advanced features, refer to the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript). 