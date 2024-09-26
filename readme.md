## How to setup Tailwind CSS

step 1: Initialize node.js project

```
npm init -y
```

Step 2: Run the following commands

``` 
npm install -D tailwindcss
npx tailwindcss init
```

Step 3: Update tailwind.conf.js file to include this line:
```
content: ["*.html"], // for learning purpose
```
in main project use:
```
["./src/**/*.{html,js}"], // Adjust this to your actual file paths
```

Step 4: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 6: Include the src/output.css file to your html which was create by CLI tool command
```
<link href="/path/to/output.css" rel="stylesheet">
```
