# Project Title

A simple next.js starter template

## Installation

Install my-project with npm

```bash
pnpm install
```

## File Structure

The project employs a well-structured file system to keep your code organized and manageable. Here's a breakdown of the key directories:

<ul>
  <li>app - The core of your application, encompassing the application logic. It houses numerous components:
    <ul>
      <li>_components - Home page main components folder. Har component ka apna folder hoga jis mai uskay components hongay
      </li>
          <li>
      (main) - Contains components specific to that particular page. For instance, the home directory might include components for your homepage.</li>
    <li>layout.tsx - This file likely defines the overall layout structure of your pages, including headers, footers, and navigation.</li>
    </ul>
    
</li>
  <li>components - The core of your application, encompassing the application logic. It houses numerous components:
    <ul>
          <li>ui - Is mai shadcn kay hi component hongay</li>
    <li>layout - Yay folder par layout files hongi jesay header, footer, navigation kay components aur iskay subcomponents hongay.</li>
        <li>Resources - Is k andr mai sirf important components dalu ga jo in future kam askti hain jesay pricing components, twitter reviews wegera...</li>
        <li>shared - Is component mai tamam files hongi jo main resources files ki zarurat hongi....</li>
    </ul>

</li>
</ul>

### lib folder :

- Hook Folder - All kind of basic hook is in this folder
- provider - All the possible providers in this folder
- scripts - Useable database scripts in this folder
- prisma.ts - Prisma file that provides database access.
- utils.ts - Useable utilities such formatter, cn and capitalizers
