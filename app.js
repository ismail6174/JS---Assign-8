let lastDecimalValue = null;

    window.onload = function () {
      const savedNote = localStorage.getItem('calcNote');
      if (savedNote) document.getElementById('noteArea').value = savedNote;
    };

    function appendValue(value) {
      const expField = document.getElementById('expression');
      expField.value += value;
    }

    function clearDisplay() {
      document.getElementById('expression').value = '';
      document.getElementById('result').value = '';
    }

    function calculate() {
      try {
        const expression = document.getElementById('expression').value;
        const result = math.evaluate(expression);
        document.getElementById('result').value = result;
        lastDecimalValue = result;
      } catch (e) {
        document.getElementById('result').value = 'Error';
      }
    }
    
function delLast() {
  var expField = document.getElementById('expression');
  expField.value = expField.value.slice(0, -1);
}

  
    function toggleCalculator() {
      document.getElementById('simpleCalc').classList.toggle('hidden');
      document.getElementById('advCalc').classList.toggle('hidden');
    }

    function applyFunction(func) {
      const display = document.getElementById('expression');
      let val = parseFloat(display.value);
      if (isNaN(val)) return;
      let radians = val * Math.PI / 180;
      let result;

      switch (func) {
        case 'sin': result = math.sin(radians); break;
        case 'cos': result = math.cos(radians); break;
        case 'tan': result = math.tan(radians); break;
        case 'sqrt': result = math.sqrt(val); break;
        case 'pow2': result = math.pow(val, 2); break;
        case 'pow3': result = math.pow(val, 3); break;
        case 'pow10': result = math.pow(10, val); break;
        case 'log': result = math.log10(val); break;
        case 'exp': result = math.exp(val); break;
        case 'abs': result = math.abs(val); break;
        case 'fact': result = math.factorial(val); break;
        case 'inv': result = 1 / val; break;
      }

      document.getElementById('result').value = result;
      document.getElementById('expression').value = `${func}(${val})`;
    }

    function toggleTheme() {
      document.body.classList.toggle('light');
    }

    function saveNote() {
      const note = document.getElementById('noteArea').value;
      localStorage.setItem('calcNote', note);
    }

    function clearNote() {
      localStorage.removeItem('calcNote');
      document.getElementById('noteArea').value = '';
    }

    function toggleFeatures() {
      document.getElementById('featuresPanel').classList.toggle('hidden');
    }

    function showReminder() {
      document.getElementById('reminderPopup').classList.remove('hidden');
    }

    function hideReminder() {
      document.getElementById('reminderPopup').classList.add('hidden');
    }
    
    function showcubelist() {
      alert(`1 to 100 cube list:
      
1³ = 1  
2³ = 8  
3³ = 27  
4³ = 64  
5³ = 125  
6³ = 216  
7³ = 343  
8³ = 512  
9³ = 729  
10³ = 1000  
11³ = 1331  
12³ = 1728  
13³ = 2197  
14³ = 2744  
15³ = 3375  
16³ = 4096  
17³ = 4913  
18³ = 5832  
19³ = 6859  
20³ = 8000  
21³ = 9261  
22³ = 10648  
23³ = 12167  
24³ = 13824  
25³ = 15625  
26³ = 17576  
27³ = 19683  
28³ = 21952  
29³ = 24389  
30³ = 27000  
31³ = 29791  
32³ = 32768  
33³ = 35937  
34³ = 39304  
35³ = 42875  
36³ = 46656  
37³ = 50653  
38³ = 54872  
39³ = 59319  
40³ = 64000  
41³ = 68921  
42³ = 74088  
43³ = 79507  
44³ = 85184  
45³ = 91125  
46³ = 97336  
47³ = 103823  
48³ = 110592  
49³ = 117649  
50³ = 125000  
51³ = 132651  
52³ = 140608  
53³ = 148877  
54³ = 157464  
55³ = 166375  
56³ = 175616  
57³ = 185193  
58³ = 195112  
59³ = 205379  
60³ = 216000  
61³ = 226981  
62³ = 238328  
63³ = 250047  
64³ = 262144  
65³ = 274625  
66³ = 287496  
67³ = 300763  
68³ = 314432  
69³ = 328509  
70³ = 343000  
71³ = 357911  
72³ = 373248  
73³ = 389017  
74³ = 405224  
75³ = 421875  
76³ = 438976  
77³ = 456533  
78³ = 474552  
79³ = 493039  
80³ = 512000  
81³ = 531441  
82³ = 551368  
83³ = 571787  
84³ = 592704  
85³ = 614125  
86³ = 636056  
87³ = 658503  
88³ = 681472  
89³ = 704969  
90³ = 729000  
91³ = 753571  
92³ = 778688  
93³ = 804357  
94³ = 830584  
95³ = 857375  
96³ = 884736  
97³ = 912673  
98³ = 941192  
99³ = 970299  
100³ = 1000000`);
    }

function showsquarelist() {
      alert(`1 to 100 Square list:
     
1² = 1  
2² = 4  
3² = 9  
4² = 16  
5² = 25  
6² = 36  
7² = 49  
8² = 64  
9² = 81  
10² = 100  
11² = 121  
12² = 144  
13² = 169  
14² = 196  
15² = 225  
16² = 256  
17² = 289  
18² = 324  
19² = 361  
20² = 400  
21² = 441  
22² = 484  
23² = 529  
24² = 576  
25² = 625  
26² = 676  
27² = 729  
28² = 784  
29² = 841  
30² = 900  
31² = 961  
32² = 1024  
33² = 1089  
34² = 1156  
35² = 1225  
36² = 1296  
37² = 1369  
38² = 1444  
39² = 1521  
40² = 1600  
41² = 1681  
42² = 1764  
43² = 1849  
44² = 1936  
45² = 2025  
46² = 2116  
47² = 2209  
48² = 2304  
49² = 2401  
50² = 2500  
51² = 2601  
52² = 2704  
53² = 2809  
54² = 2916  
55² = 3025  
56² = 3136  
57² = 3249  
58² = 3364  
59² = 3481  
60² = 3600  
61² = 3721  
62² = 3844  
63² = 3969  
64² = 4096  
65² = 4225  
66² = 4356  
67² = 4489  
68² = 4624  
69² = 4761  
70² = 4900  
71² = 5041  
72² = 5184  
73² = 5329  
74² = 5476  
75² = 5625  
76² = 5776  
77² = 5929  
78² = 6084  
79² = 6241  
80² = 6400  
81² = 6561  
82² = 6724  
83² = 6889  
84² = 7056  
85² = 7225  
86² = 7396  
87² = 7569  
88² = 7744  
89² = 7921  
90² = 8100  
91² = 8281  
92² = 8464  
93² = 8649  
94² = 8836  
95² = 9025  
96² = 9216  
97² = 9409  
98² = 9604  
99² = 9801  
100² = 10000
      `);
 }   
          
    function showConversions() {
      alert(`Conversions:

Length
1. 1 mile = 1609.34 meters
2. 1 centimeter (cm) = 10 millimeters (mm)
3. 1 meter (m) = 1000 millimeters (mm)
4. 1 Km = 1000m

Weight
1. 1 ton = 2000 pounds (lb) or 1000kg
2. 1 gram (g) = 1000 milligrams (mg)

Volume
1. 1 cup = 236.6 milliliters (mL)
2. 1 pint = 473.2 milliliters (mL)
3. 1 quart = 946.4 milliliters (mL)

Time
1. 1 hour = 60 minutes
2. 1 minute = 60 seconds
3. 1 day = 24 hours
4. 1 hour = 3600 sec
5. 1 day = 86400 sec
6. 1 day = 1440 min

Data
1. 1 kilobyte (KB) = 1024 bytes
2. 1 megabyte (MB) = 1024 kilobytes (KB)

Other
1. 1 dozen = 12 units
2. 1 gross = 144 units`);
    }