#ReadMe.md

I started this project in order to help people visualize the Lewis shapes of molecules. 

It is frustrating to go on many websites and try to find the Lewis shape for a specific molecule, so I hope this will take off as a main source for finding the Lewis Shapes.

Also, I tried to use the least number of libraries and data in order to decrease the file size. Ideally, someone who has slow internet should be able to load this page easily, and that is why I preferred reducing the file size as much as possible.

##Background

There are two possible ways to have something that visualizes the shapes of molecules: having an algorithm that can get, with accuracy, the shape of any molecule, or having a database that stored multiple molecules and calls one of them when a users requests it.

To create an algorithm that accounts for all the elements and shapes is a difficult task. Here is an example that does so: 

[pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410)

I could use this website to create easily make the images generate easily, but I didn't like the interface. If you go on their website, look for *https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/vioxx*. This is the basic url for how to generate them. Erase "vioxx", then add */molecule/png* to generate, for example, a molecule in PNG format. Other formats are elligible as well. For water, add */H2O/png* for example. (*/water/png* works as well) Try this link: [H2O from pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/H2O/png).

However, I found out that this, although being extremely powerful, also uses a database and not an algorithm. Another example is the one by [Wolfram Alpha](http://www.wolframalpha.com/widgets/view.jsp?id=689aa5a01c216d8b16ed0250cebdc702). This one is also powerful. I am not sure whether they use a database or an algorithm, but I think they use an algorithm. Although it does not always generate shapes, it returns the name of the given molecule correctly (Although I have not tried all possible combinations). It is powerful.

##My Method

There are drawbacks from each of the two methods mentioned. The [pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410) version's display is not sharp enough, and I also did not like the tediousness of inputting different molecules in the Url. I could have made this to call the link for each molecule, but I also did not want to have too many HTTP requests (hopefully it's called that way). One of the main goal that I had in this project is for the page to have the fastest loading possible. I want this to be accessible, and neither [pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410) nor [Wolfram Alpha](http://www.wolframalpha.com/widgets/view.jsp?id=689aa5a01c216d8b16ed0250cebdc702) achieve this. [Wolfram Alpha](http://www.wolframalpha.com/widgets/view.jsp?id=689aa5a01c216d8b16ed0250cebdc702) especially takes too long to load (**I can't imagine how intricate of an algorithm works behind the scenes, but it seems to be heavy in size**), and [pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410) is just too many HTTP requests.

So, I preferred using SVG to draw shapes. SVG images are sharp, so they provide for the best way to visualize these shapes. I created javascript functions called "line" to draw lines, "dot" to place dots, and "element" to place a text on the "canvas" or drawingSpace in the HTML. There is also a function that recognizes direction in the form of "(x1)(y1)_(x2)(y2)", and this helps placing elements in the SVG. 

For the reasons mentioned in the first paragraph, I decided to make use of frameworks the least possible. I only made use of HTML, CSS, SCSS, and JavaScripts, and I probably will use Node.js for back-end. This was also a learning experience for me, so I really liked doing it. Also, all  molecules will be stored in the Javascript code and saved in a personal database as backups. I know that as more molecules are added, the file size will grow, so it's best not to add frameworks and other datas. 

The main drawback from this method is that every molecules are saved on file. This causes the work to be tedious and "inefficient" in coding terms. However, accounting for all possible compounds using the sporadic properties of chemistry would be, if not harder, equally difficult. That is why I preferred using a stored data method.

I have not found any algorithm that can draw Lewis Shapes perfectly without getting data from a database. I plan to have a function that draw shapes in a much faster way and more accurate.

I can find molecules from multiple places:  
[Reciprocal Net](http://www.reciprocalnet.org/edumodules/commonmolecules/list.html)  
[Wikipedia](https://en.wikipedia.org/wiki/List_of_interstellar_and_circumstellar_molecules)  
[Grindell](http://web.grinnell.edu/courses/chm/visualization/)  
[Periodni.com](http://www.periodni.com/solcalc-chemical_compounds.html)  

Here is a list of a few websites that help for making this site happen:
[Catalog flatworldknowledge:Line structures](http://catalog.flatworldknowledge.com/bookhub/reader/2547?e=gob-ch12_s04)  
[Chemistry libretexts:Line structures](http://chem.libretexts.org/Core/Organic_Chemistry/Fundamentals/Structure_of_Organic_Molecules)  
[Chem.ucla:Resonance](http://www.chem.ucla.edu/~harding/tutorials/resonance/draw_res_str.html)
[Webqc](http://www.webqc.org/molecular-weight-of-BrF2.html)  
[Wikipedia:Resonance](https://en.wikipedia.org/wiki/Resonance_(chemistry))  
[Wikipedia:Line structures](https://en.wikipedia.org/wiki/Skeletal_formula)  
[WolframAlpha's widget](http://www.wolframalpha.com/widgets/view.jsp?id=689aa5a01c216d8b16ed0250cebdc702)

Here is a list of websites that helped in finding molecules to add and their names:
[Quia.com](https://www.quia.com/jg/125193list.html)
[Endmemo.com](http://www.endmemo.com/chem/chemsearch.php)
[TutorVista.com](http://www.tutorvista.com/chemistry/list-of-molecular-formulas)  
[Periodni.com](http://www.periodni.com/solcalc-chemical_compounds.html)  
[Reciprocalnet.org](http://www.reciprocalnet.org/edumodules/commonmolecules/list.html)  

##Our Database: (in alphabetical and increasing number order)

[Click here](link) to see a list of molecules already within the database and molecules that are ready to be added.

