#ReadMe.text

I started this project in order to help people visualize the Lewis shapes of molecules. 

It is frustrating to go on many websites and try to find the Lewis shape for a specific molecule, so I hope this will take off as a main source for finding the Lewis Shapes.

##Background

There are two possible ways to have something that visualizes the shapes of molecules: having an algorithm that can get, with accuracy, the shape of any molecule, or having a database that stored multiple molecules and calls one of them when a users requests it.

To create an algorithm that accounts for all the elements and shapes is a difficult tast. Here is an example that does so: 

[pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410)

I could use this website to create easily make the images generate easily, but I didn't like the interface. If you go on their website, look for *https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/vioxx*. This is the basic url for how to generate them. Erase "vioxx", then add */molecule/png* to generate, for example, a molecule in PNG format. Other formats are elligible as well. For water, add */H2O/png* for example. (*/water/png* works as well) Try this link: [H2O from pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/H2O/png).

However, I found out that this, although being extremely powerful, also uses a database and not an algorithm. Another example is the one by [Wolfram Alpha](http://www.wolframalpha.com/widgets/view.jsp?id=689aa5a01c216d8b16ed0250cebdc702). This one is also powerful. I am not sure whether they use a database or an algorithm, but I think they use an algorithm. Although it does not always generate shapes, it returns the name of the given molecule correctly (Although I have not tried all possible combinations). It is powerful.

##My Method

There are drawbacks from each of the two methods mentioned. The [pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410) version's display is not sharp enough, and I also did not like the tediousness of inputting different molecules in the Url. I could have made this to call the link for each molecule, but I also did not want to have too many HTTP requests (hopefully it's called that way). One of the main goal that I had in this project is for the page to have the fastest loading possible. I want this to be accessible, and neither [pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410) nor [Wolfram Alpha](http://www.wolframalpha.com/widgets/view.jsp?id=689aa5a01c216d8b16ed0250cebdc702) achieve this. [Wolfram Alpha](http://www.wolframalpha.com/widgets/view.jsp?id=689aa5a01c216d8b16ed0250cebdc702) especially takes too long to load (**I can't imagine how intricate of an algorithm works behind the scenes, but it seems to be heavy in size**), and [pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410) is just too many HTTP requests.

So, I preferred using SVG to draw shapes. SVG images are sharp, so they provide for the best way to visualize these shapes. I created javascript functions called "line" to draw lines, "dot" to place dots, and "element" to place a text on the "canvas" or drawingSpace in the HTML. There is also a function that recognizes direction in the form of "(x1)(y1)_(x2)(y2)", and this helps placing elements in the SVG. 

For the reasons mentioned in the first paragraph, I decided to make use of frameworks the least possible. I only made use of HTML, CSS, SCSS, and JavaScripts, and I probably will use Node.js for back-end. This was also a learning experience for me, so I really liked doing it. Also, all  molecules will be stored in the Javascript code and saved in a personal database as backups. I know that as more molecules are added, the file size will grow, so it's best not to add frameworks and other datas. 

The main drawback from this method is that every molecules are saved on file. This causes the work to be tedious and "inefficient" in coding terms. However, accounting for all possible compounds using the sporadic properties of chemistry would be, if not harder, equally difficult. That is why I preferred using a stored data method.

I have not found any algorithm that can draw Lewis Shapes perfectly without getting data from a database. I plan to have a function that draw shapes in a much faster way and more accurate.

##Molecules on file: (in alphabetical and increasing number order)

CH4  
CH3COOH  
CH3COO^(-)  
CO3^(2-)  
H2O  
N2  
NH3  
NH4^(+)  
NO2^(-)  
NO3^(-)  
OH^(-)  
PO4^(3-)  
SCl2  
XeF2  
XeF3+  
XeO3  

##TO ADD:

AlCl4^(-)  
BF3  
BrF2^(+)  
CCl4  
C2H2  
C2H4  
CHCl3  
CH2Br2  
CH2F2  
CH3OH  
CN^(-)  
COCl2  
HCN  
HCO^(+)  
HCO3^(-)  
H2CO3  
H2S  
H2CNN  
ICl4^(-)  
IF5  
IO2^(-)  
N2H2  
OF2  
PBr3  
PCl6^(-)  
PO3^(3-)  
SCN^(-)  
SO3  
SO4^(2-)  
SeBr6  
XeO2F2  


