# ReadMe.text

The goal of this project is to create a way to visualize the shape of molecules. 

To create an algorithm that accounts for all the elements and shapes would be too difficult. Here is an example that does so: 

[pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/pug_rest/PUG_REST_Tutorial.html#_Toc458584410)

I could potentially use the website above, but I did not like the interface. They also use a database, but theirs seems more "legit".

Look for [pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/vioxx) on the website. An example would be this, [H2O from pubchem.ncbi.nlm](https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/H2O/png)

This is also in the JS as a comment. I preferred using SVG to draw shapes. I created functions called "line" to draw lines, "dot" to place dots, and "element" to place a text on the "canvas" or drawingSpace in the HTML. There is also a function that recognizes direction in the form of "(x1)(y1)_(x2)(y2)", and this helps placing elements in the SVG.

The main drawback from this method is that every molecules are saved on file. This causes the work to be tedious and "inefficient" in coding terms. However, accounting for all possible compounds using the sporadic properties of chemistry would be, if not harder, equally difficult.


Molecules on file: (in alphabetical order)

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

TOADD:

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


