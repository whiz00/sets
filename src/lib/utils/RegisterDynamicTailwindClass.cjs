module.exports = ['group-hover:fill-black', 'group-hover:fill-red-500']

// export let test = 'group-hover:fill-red-500'

/*
    Dynamic tailwind classes are usually not allowed since Tailwind extracts the classes to ship by regexing source code.
    https://tailwindcss.com/docs/content-configuration#dynamic-class-names

    But sometimes it is possible for the developer to know in-beforehand if class can be statically rendered, 
    appearing only dynamic for a descent API experience. 
    
    The purpose of this class is therefore to act as a dumping place for those classes that are "dynamically" generated on server-side.
    Classes are to be added with RegisterDynamicTailwindClass which acts as a singelton that is then read by tailwind.config.cjs

    I tried:
    * Pointing 'content' of tailwind.config.js to outDir of Svelte-kit with kit.prerendered.default: true
        It tried grepping the some concatenated classes but they still appeared as seperate
        But even if it did work, I woul presume the solution to be far from ideal. 
        Regexing such a large directory can hardly be performant.
    * Using tailwind.config safelist:
        safelist: [
            {
                pattern: /fill\-(\w*\-)*\w*(\/\d*)?/,
                variants: ['group-hover'],
            },
        ],
    
        Increased the build output .css by 328KB, not an option.

    * Trying use module loading of this file by renaiming it to .mjs and using an import() statement in tailwind config won't work.
        I believe it is because import() is async, which doesn't go well require("tailwind") is called.
    * Trying to combine Typescript with a non-typescript tailwind.config.cjs didn't really work either.
        Think it is something about how this file can't be compiled as an isolated module. 
        Shooting myself in the food for each expression it is. 
*/
