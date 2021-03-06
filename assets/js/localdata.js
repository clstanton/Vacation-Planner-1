var fullNameCode = [];
var stateRadio = document.getElementById("state-modal");
var parkModal = document.getElementById("park-modal");
var subMenu = document.getElementById("submenu");

var parkList = [
   {'fullname': 'Birmingham Civil Rights National Monument', 'states': 'AL', 'parkCode': 'bicr', 'longitude': '-86.8146667480469', 'latitude': '33.5154266357422', 'postalCode': '0'},
   {'fullname': 'Freedom Riders National Monument', 'states': 'AL', 'parkCode': 'frri', 'longitude': '-85.9064331054688', 'latitude': '33.6352691650391', 'postalCode': '36202'},
   {'fullname': 'Horseshoe Bend National Military Park', 'states': 'AL', 'parkCode': 'hobe', 'longitude': '-85.73413589', 'latitude': '32.97668879', 'postalCode': '36256'},
   {'fullname': 'Little River Canyon National Preserve', 'states': 'AL', 'parkCode': 'liri', 'longitude': '-85.61734327', 'latitude': '34.41461863', 'postalCode': '35967'},
   {'fullname': 'Muscle Shoals National Heritage Area', 'states': 'AL', 'parkCode': 'mush', 'longitude': '-87.4196395874023', 'latitude': '34.6414527893066', 'postalCode': '35630'},
   {'fullname': 'Natchez Trace National Scenic Trail', 'states': 'AL,MS,TN', 'parkCode': 'natt', 'longitude': '-88.7100104093552', 'latitude': '34.3302903330188', 'postalCode': '38804'},
   {'fullname': 'Natchez Trace Parkway', 'states': 'AL,MS,TN', 'parkCode': 'natr', 'longitude': '-89.03092439', 'latitude': '33.78002293', 'postalCode': '38804'},
   {'fullname': 'Russell Cave National Monument', 'states': 'AL', 'parkCode': 'ruca', 'longitude': '-85.81560314', 'latitude': '34.97402063', 'postalCode': '35740'},
   {'fullname': 'Selma To Montgomery National Historic Trail', 'states': 'AL', 'parkCode': 'semo', 'longitude': '-86.72823702', 'latitude': '32.27082092', 'postalCode': '36040'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Tuskegee Airmen National Historic Site', 'states': 'AL', 'parkCode': 'tuai', 'longitude': '-85.67983321', 'latitude': '32.45538671', 'postalCode': '36083'},
   {'fullname': 'Tuskegee Institute National Historic Site', 'states': 'AL', 'parkCode': 'tuin', 'longitude': '-85.70488498', 'latitude': '32.42962115', 'postalCode': '36088'},
   {'fullname': 'Alagnak Wild River', 'states': 'AK', 'parkCode': 'alag', 'longitude': '-156.112002', 'latitude': '59.05180188', 'postalCode': '99613'},
   {'fullname': 'Alaska Public Lands', 'states': 'AK', 'parkCode': 'anch', 'longitude': '', 'latitude': '', 'postalCode': '99501'},
   {'fullname': 'Aleutian Islands World War II National Historic Area', 'states': 'AK', 'parkCode': 'aleu', 'longitude': '-166.5197218', 'latitude': '53.9143076', 'postalCode': '99501'},
   {'fullname': 'Aniakchak National Monument & Preserve', 'states': 'AK', 'parkCode': 'ania', 'longitude': '-157.5544362', 'latitude': '56.85317675', 'postalCode': '99613'},
   {'fullname': 'Bering Land Bridge National Preserve', 'states': 'AK', 'parkCode': 'bela', 'longitude': '-164.4086432', 'latitude': '65.96087902', 'postalCode': '99762'},
   {'fullname': 'Cape Krusenstern National Monument', 'states': 'AK', 'parkCode': 'cakr', 'longitude': '-163.5037786', 'latitude': '67.41499986', 'postalCode': '99752'},
   {'fullname': 'Denali National Park & Preserve', 'states': 'AK', 'parkCode': 'dena', 'longitude': '-151.0526568', 'latitude': '63.29777484', 'postalCode': '99755'},
   {'fullname': 'Gates Of The Arctic National Park & Preserve', 'states': 'AK', 'parkCode': 'gaar', 'longitude': '-153.2917758', 'latitude': '67.75961636', 'postalCode': '99701'},
   {'fullname': 'Glacier Bay National Park & Preserve', 'states': 'AK', 'parkCode': 'glba', 'longitude': '-136.8407579', 'latitude': '58.80086718', 'postalCode': '99826'},
   {'fullname': 'Iñupiat Heritage Center', 'states': 'AK', 'parkCode': 'inup', 'longitude': '-156.7529136', 'latitude': '71.29889155', 'postalCode': '99723'},
   {'fullname': 'Katmai National Park & Preserve', 'states': 'AK', 'parkCode': 'katm', 'longitude': '-155.0126574', 'latitude': '58.62235668', 'postalCode': '99613'},
   {'fullname': 'Kenai Fjords National Park', 'states': 'AK', 'parkCode': 'kefj', 'longitude': '-150.106502', 'latitude': '59.81804414', 'postalCode': '99664'},
   {'fullname': 'Klondike Gold Rush National Historical Park', 'states': 'AK', 'parkCode': 'klgo', 'longitude': '-135.2618535', 'latitude': '59.61042373', 'postalCode': '99840'},
   {'fullname': 'Kobuk Valley National Park', 'states': 'AK', 'parkCode': 'kova', 'longitude': '-159.2002293', 'latitude': '67.35631336', 'postalCode': '99752'},
   {'fullname': 'Lake Clark National Park & Preserve', 'states': 'AK', 'parkCode': 'lacl', 'longitude': '-153.55535', 'latitude': '60.57405857', 'postalCode': '99653'},
   {'fullname': 'Noatak National Preserve', 'states': 'AK', 'parkCode': 'noat', 'longitude': '-159.831694', 'latitude': '68.01027053', 'postalCode': '99752'},
   {'fullname': 'Sitka National Historical Park', 'states': 'AK', 'parkCode': 'sitk', 'longitude': '-135.3156876', 'latitude': '57.04718173', 'postalCode': '99835'},
   {'fullname': 'Wrangell - St Elias National Park & Preserve', 'states': 'AK', 'parkCode': 'wrst', 'longitude': '-142.6028439', 'latitude': '61.4182147', 'postalCode': '99573'},
   {'fullname': 'Yukon - Charley Rivers National Preserve', 'states': 'AK', 'parkCode': 'yuch', 'longitude': '-142.7960021', 'latitude': '65.0935608', 'postalCode': '99701'},
   {'fullname': 'National Park of American Samoa', 'states': 'AS', 'parkCode': 'npsa', 'longitude': '-169.8503777', 'latitude': '-14.22865935', 'postalCode': '96799'},
   {'fullname': 'Canyon de Chelly National Monument', 'states': 'AZ', 'parkCode': 'cach', 'longitude': '-109.3388303', 'latitude': '36.14319567', 'postalCode': '86503'},
   {'fullname': 'Casa Grande Ruins National Monument', 'states': 'AZ', 'parkCode': 'cagr', 'longitude': '-111.5325383', 'latitude': '32.99702582', 'postalCode': '85128'},
   {'fullname': 'Chiricahua National Monument', 'states': 'AZ', 'parkCode': 'chir', 'longitude': '-109.341607', 'latitude': '32.01214618', 'postalCode': '85643'},
   {'fullname': 'Coronado National Memorial', 'states': 'AZ', 'parkCode': 'coro', 'longitude': '-110.2561574', 'latitude': '31.34900397', 'postalCode': '85615'},
   {'fullname': 'Fort Bowie National Historic Site', 'states': 'AZ', 'parkCode': 'fobo', 'longitude': '-109.451132', 'latitude': '32.14925942', 'postalCode': '85605'},
   {'fullname': 'Glen Canyon National Recreation Area', 'states': 'AZ,UT', 'parkCode': 'glca', 'longitude': '-110.7718311', 'latitude': '37.51841301', 'postalCode': '86040'},
   {'fullname': 'Grand Canyon National Park', 'states': 'AZ', 'parkCode': 'grca', 'longitude': '-112.6836024', 'latitude': '36.17280161', 'postalCode': '86023'},
   {'fullname': 'Hohokam Pima National Monument', 'states': 'AZ', 'parkCode': 'pima', 'longitude': '-111.9192737', 'latitude': '33.18713877', 'postalCode': '85128'},
   {'fullname': 'Hubbell Trading Post National Historic Site', 'states': 'AZ', 'parkCode': 'hutr', 'longitude': '-109.5599515', 'latitude': '35.70727324', 'postalCode': '86505-0150'},
   {'fullname': 'Juan Bautista de Anza National Historic Trail', 'states': 'AZ,CA', 'parkCode': 'juba', 'longitude': '', 'latitude': '', 'postalCode': '94804'},
   {'fullname': 'Lake Mead National Recreation Area', 'states': 'AZ,NV', 'parkCode': 'lake', 'longitude': '-114.3469067', 'latitude': '35.96622528', 'postalCode': '89005'},
   {'fullname': 'Montezuma Castle National Monument', 'states': 'AZ', 'parkCode': 'moca', 'longitude': '-111.8147857', 'latitude': '34.62237771', 'postalCode': '86322'},
   {'fullname': 'Navajo National Monument', 'states': 'AZ', 'parkCode': 'nava', 'longitude': '-110.5504015', 'latitude': '36.71755643', 'postalCode': '86045'},
   {'fullname': 'Old Spanish National Historic Trail', 'states': 'AZ,CA,CO,NV,NM,UT', 'parkCode': 'olsp', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Organ Pipe Cactus National Monument', 'states': 'AZ', 'parkCode': 'orpi', 'longitude': '-112.8573314', 'latitude': '32.03585543', 'postalCode': '85321'},
   {'fullname': 'Parashant National Monument', 'states': 'AZ', 'parkCode': 'para', 'longitude': '-113.6682797', 'latitude': '36.41535465', 'postalCode': '84790'},
   {'fullname': 'Petrified Forest National Park', 'states': 'AZ', 'parkCode': 'pefo', 'longitude': '-109.7877678', 'latitude': '34.98387664', 'postalCode': '86028'},
   {'fullname': 'Pipe Spring National Monument', 'states': 'AZ', 'parkCode': 'pisp', 'longitude': '-112.7398567', 'latitude': '36.86282666', 'postalCode': '86022'},
   {'fullname': 'Saguaro National Park', 'states': 'AZ', 'parkCode': 'sagu', 'longitude': '-110.7574974', 'latitude': '32.20909636', 'postalCode': '85730'},
   {'fullname': 'Sunset Crater Volcano National Monument', 'states': 'AZ', 'parkCode': 'sucr', 'longitude': '-111.510376', 'latitude': '35.37114323', 'postalCode': '86004'},
   {'fullname': 'Tonto National Monument', 'states': 'AZ', 'parkCode': 'tont', 'longitude': '-111.1135627', 'latitude': '33.64842945', 'postalCode': '85545'},
   {'fullname': 'Tumacácori National Historical Park', 'states': 'AZ', 'parkCode': 'tuma', 'longitude': '-111.051223', 'latitude': '31.567824', 'postalCode': '85640'},
   {'fullname': 'Tuzigoot National Monument', 'states': 'AZ', 'parkCode': 'tuzi', 'longitude': '-112.0279069', 'latitude': '34.77296377', 'postalCode': '86322'},
   {'fullname': 'Walnut Canyon National Monument', 'states': 'AZ', 'parkCode': 'waca', 'longitude': '-111.5024239', 'latitude': '35.16822994', 'postalCode': '86004'},
   {'fullname': 'Wupatki National Monument', 'states': 'AZ', 'parkCode': 'wupa', 'longitude': '-111.3957216', 'latitude': '35.55741077', 'postalCode': '86004'},
   {'fullname': 'Arkansas Post National Memorial', 'states': 'AR', 'parkCode': 'arpo', 'longitude': '-91.30837178', 'latitude': '34.00389998', 'postalCode': '72055'},
   {'fullname': 'Buffalo National River', 'states': 'AR', 'parkCode': 'buff', 'longitude': '-92.90761584', 'latitude': '36.04116481', 'postalCode': '72601'},
   {'fullname': 'Fort Smith National Historic Site', 'states': 'AR,OK', 'parkCode': 'fosm', 'longitude': '-94.43129079', 'latitude': '35.38834746', 'postalCode': '72901'},
   {'fullname': 'Hot Springs National Park', 'states': 'AR', 'parkCode': 'hosp', 'longitude': '-93.06332936', 'latitude': '34.52414366', 'postalCode': '71901'},
   {'fullname': 'Little Rock Central High School National Historic Site', 'states': 'AR', 'parkCode': 'chsc', 'longitude': '-92.29987899', 'latitude': '34.7369465', 'postalCode': '72202'},
   {'fullname': 'Pea Ridge National Military Park', 'states': 'AR', 'parkCode': 'peri', 'longitude': '-94.03468357', 'latitude': '36.45438033', 'postalCode': '72732'},
   {'fullname': 'President William Jefferson Clinton Birthplace Home National Historic Site', 'states': 'AR', 'parkCode': 'wicl', 'longitude': '-93.59641868', 'latitude': '33.66758356', 'postalCode': '71801'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Alcatraz Island', 'states': 'CA', 'parkCode': 'alca', 'longitude': '-122.4230206', 'latitude': '37.82676234', 'postalCode': '94123'},
   {'fullname': 'Cabrillo National Monument', 'states': 'CA', 'parkCode': 'cabr', 'longitude': '-117.2415985', 'latitude': '32.6722503', 'postalCode': '92106'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Castle Mountains National Monument', 'states': 'CA', 'parkCode': 'camo', 'longitude': '-115.0935606', 'latitude': '35.29156348', 'postalCode': '92311'},
   {'fullname': 'César E. Chávez National Monument', 'states': 'CA', 'parkCode': 'cech', 'longitude': '-118.5615781', 'latitude': '35.22729389', 'postalCode': '93531'},
   {'fullname': 'Channel Islands National Park', 'states': 'CA', 'parkCode': 'chis', 'longitude': '-119.9112735', 'latitude': '33.98680093', 'postalCode': '93001'},
   {'fullname': 'Death Valley National Park', 'states': 'CA,NV', 'parkCode': 'deva', 'longitude': '-117.134395', 'latitude': '36.48753731', 'postalCode': '92328'},
   {'fullname': 'Devils Postpile National Monument', 'states': 'CA', 'parkCode': 'depo', 'longitude': '-119.0873903', 'latitude': '37.6152564', 'postalCode': '93546'},
   {'fullname': 'Eugene O\'Neill National Historic Site', 'states': 'CA', 'parkCode': 'euon', 'longitude': '-122.0271566', 'latitude': '37.82604456', 'postalCode': '94526'},
   {'fullname': 'Fort Point National Historic Site', 'states': 'CA', 'parkCode': 'fopo', 'longitude': '-122.473747', 'latitude': '37.80837439', 'postalCode': '94123'},
   {'fullname': 'Golden Gate National Recreation Area', 'states': 'CA', 'parkCode': 'goga', 'longitude': '-122.6007386', 'latitude': '37.85982543', 'postalCode': '94123-0022'},
   {'fullname': 'John Muir National Historic Site', 'states': 'CA', 'parkCode': 'jomu', 'longitude': '-122.1326097', 'latitude': '37.9828422', 'postalCode': '94553'},
   {'fullname': 'Joshua Tree National Park', 'states': 'CA', 'parkCode': 'jotr', 'longitude': '-115.8398125', 'latitude': '33.91418525', 'postalCode': '92277-3597'},
   {'fullname': 'Juan Bautista de Anza National Historic Trail', 'states': 'AZ,CA', 'parkCode': 'juba', 'longitude': '', 'latitude': '', 'postalCode': '94804'},
   {'fullname': 'Lassen Volcanic National Park', 'states': 'CA', 'parkCode': 'lavo', 'longitude': '-121.4075993', 'latitude': '40.49354575', 'postalCode': '96063'},
   {'fullname': 'Lava Beds National Monument', 'states': 'CA', 'parkCode': 'labe', 'longitude': '-121.5172189', 'latitude': '41.75915823', 'postalCode': '96134'},
   {'fullname': 'Manzanar National Historic Site', 'states': 'CA', 'parkCode': 'manz', 'longitude': '-118.1547177', 'latitude': '36.72559195', 'postalCode': '93526'},
   {'fullname': 'Mojave National Preserve', 'states': 'CA', 'parkCode': 'moja', 'longitude': '-115.5168258', 'latitude': '35.12485941', 'postalCode': '92311'},
   {'fullname': 'Muir Woods National Monument', 'states': 'CA', 'parkCode': 'muwo', 'longitude': '-122.5808047', 'latitude': '37.89658027', 'postalCode': '94941'},
   {'fullname': 'Old Spanish National Historic Trail', 'states': 'AZ,CA,CO,NV,NM,UT', 'parkCode': 'olsp', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pinnacles National Park', 'states': 'CA', 'parkCode': 'pinn', 'longitude': '-121.1813607', 'latitude': '36.49029208', 'postalCode': '95043'},
   {'fullname': 'Point Reyes National Seashore', 'states': 'CA', 'parkCode': 'pore', 'longitude': '-122.8797804', 'latitude': '38.05511241', 'postalCode': '94956'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Port Chicago Naval Magazine National Memorial', 'states': 'CA', 'parkCode': 'poch', 'longitude': '-122.0301603', 'latitude': '38.05685472', 'postalCode': '94553'},
   {'fullname': 'Presidio of San Francisco', 'states': 'CA', 'parkCode': 'prsf', 'longitude': '-122.4662415', 'latitude': '37.79718395', 'postalCode': '94129'},
   {'fullname': 'Redwood National and State Parks', 'states': 'CA', 'parkCode': 'redw', 'longitude': '-124.0318129', 'latitude': '41.37237268', 'postalCode': '95531'},
   {'fullname': 'Rosie the Riveter WWII Home Front National Historical Park', 'states': 'CA', 'parkCode': 'rori', 'longitude': '-122.360156', 'latitude': '37.90999027', 'postalCode': '94804'},
   {'fullname': 'San Francisco Maritime National Historical Park', 'states': 'CA', 'parkCode': 'safr', 'longitude': '-122.4244415', 'latitude': '37.81005871', 'postalCode': '94109'},
   {'fullname': 'Santa Monica Mountains National Recreation Area', 'states': 'CA', 'parkCode': 'samo', 'longitude': '-118.7708619', 'latitude': '34.09777606', 'postalCode': '91302'},
   {'fullname': 'Sequoia & Kings Canyon National Parks', 'states': 'CA', 'parkCode': 'seki', 'longitude': '-118.587429', 'latitude': '36.71277299', 'postalCode': '93271'},
   {'fullname': 'Tule Lake National Monument', 'states': 'CA', 'parkCode': 'tule', 'longitude': '-121.3744818', 'latitude': '41.88727902', 'postalCode': '96134'},
   {'fullname': 'Whiskeytown National Recreation Area', 'states': 'CA', 'parkCode': 'whis', 'longitude': '-122.6022657', 'latitude': '40.61359941', 'postalCode': '96095'},
   {'fullname': 'Yosemite National Park', 'states': 'CA', 'parkCode': 'yose', 'longitude': '-119.5571873', 'latitude': '37.84883288', 'postalCode': '95389'},
   {'fullname': 'Bent\'s Old Fort National Historic Site', 'states': 'CO', 'parkCode': 'beol', 'longitude': '-103.4266499', 'latitude': '38.03977546', 'postalCode': '81050'},
   {'fullname': 'Black Canyon Of The Gunnison National Park', 'states': 'CO', 'parkCode': 'blca', 'longitude': '-107.7242756', 'latitude': '38.57779869', 'postalCode': '81401'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Colorado National Monument', 'states': 'CO', 'parkCode': 'colm', 'longitude': '-108.6920709', 'latitude': '39.05045016', 'postalCode': '81521'},
   {'fullname': 'Curecanti National Recreation Area', 'states': 'CO', 'parkCode': 'cure', 'longitude': '-107.3303371', 'latitude': '38.46584558', 'postalCode': '81230'},
   {'fullname': 'Dinosaur National Monument', 'states': 'CO,UT', 'parkCode': 'dino', 'longitude': '-108.9333714', 'latitude': '40.50739742', 'postalCode': '81610'},
   {'fullname': 'Florissant Fossil Beds National Monument', 'states': 'CO', 'parkCode': 'flfo', 'longitude': '-105.2803396', 'latitude': '38.91260586', 'postalCode': '80816'},
   {'fullname': 'Great Sand Dunes National Park & Preserve', 'states': 'CO', 'parkCode': 'grsa', 'longitude': '-105.5919572', 'latitude': '37.79256812', 'postalCode': '81146'},
   {'fullname': 'Hovenweep National Monument', 'states': 'CO,UT', 'parkCode': 'hove', 'longitude': '-109.0047977', 'latitude': '37.39134092', 'postalCode': '81321'},
   {'fullname': 'Mesa Verde National Park', 'states': 'CO', 'parkCode': 'meve', 'longitude': '-108.4624032', 'latitude': '37.23908345', 'postalCode': '81330'},
   {'fullname': 'Old Spanish National Historic Trail', 'states': 'AZ,CA,CO,NV,NM,UT', 'parkCode': 'olsp', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Rocky Mountain National Park', 'states': 'CO', 'parkCode': 'romo', 'longitude': '-105.6972879', 'latitude': '40.3556924', 'postalCode': '80517'},
   {'fullname': 'Sand Creek Massacre National Historic Site', 'states': 'CO', 'parkCode': 'sand', 'longitude': '-102.5169542', 'latitude': '38.56414189', 'postalCode': '81036-0249'},
   {'fullname': 'Santa Fe National Historic Trail', 'states': 'CO,KS,MO,NM,OK', 'parkCode': 'safe', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Yucca House National Monument', 'states': 'CO', 'parkCode': 'yuho', 'longitude': '-108.6861274', 'latitude': '37.24778944', 'postalCode': '81330'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Coltsville National Historical Park', 'states': 'CT', 'parkCode': 'colt', 'longitude': '-73.2036666870117', 'latitude': '42.4677505493164', 'postalCode': '01105'},
   {'fullname': 'New England National Scenic Trail', 'states': 'MA,CT', 'parkCode': 'neen', 'longitude': '-72.5242767333984', 'latitude': '42.2915819136851', 'postalCode': '02109'},
   {'fullname': 'The Last Green Valley National Heritage Corridor', 'states': 'CT,MA', 'parkCode': 'qush', 'longitude': '', 'latitude': '', 'postalCode': '06239'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'Weir Farm National Historic Site', 'states': 'CT', 'parkCode': 'wefa', 'longitude': '-73.45452542', 'latitude': '41.25886268', 'postalCode': '06897'},
   {'fullname': 'Captain John Smith Chesapeake National Historic Trail', 'states': 'VA,MD,DE,DC,PA,NY', 'parkCode': 'cajo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '23690'},
   {'fullname': 'Chesapeake Bay', 'states': 'DC,DE,MD,NY,PA,VA,WV', 'parkCode': 'cbpo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '21403'},
   {'fullname': 'First State National Historical Park', 'states': 'DE,PA', 'parkCode': 'frst', 'longitude': '-75.56353942', 'latitude': '39.83076929', 'postalCode': '19720'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'African American Civil War Memorial', 'states': 'DC', 'parkCode': 'afam', 'longitude': '-77.025977', 'latitude': '38.916554', 'postalCode': '20001'},
   {'fullname': 'Anacostia Park', 'states': 'DC', 'parkCode': 'anac', 'longitude': '-76.96314236', 'latitude': '38.89644397', 'postalCode': '20020'},
   {'fullname': 'Belmont-Paul Women\'s Equality National Monument', 'states': 'DC', 'parkCode': 'bepa', 'longitude': '-77.00381882', 'latitude': '38.89231541', 'postalCode': '20002'},
   {'fullname': 'Capitol Hill Parks', 'states': 'DC', 'parkCode': 'cahi', 'longitude': '-76.990332', 'latitude': '38.889993', 'postalCode': '20020'},
   {'fullname': 'Captain John Smith Chesapeake National Historic Trail', 'states': 'VA,MD,DE,DC,PA,NY', 'parkCode': 'cajo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '23690'},
   {'fullname': 'Carter G. Woodson Home National Historic Site', 'states': 'DC', 'parkCode': 'cawo', 'longitude': '-77.02431104', 'latitude': '38.91089286', 'postalCode': '20001'},
   {'fullname': 'Chesapeake & Ohio Canal National Historical Park', 'states': 'DC,MD,WV', 'parkCode': 'choh', 'longitude': '-77.89763546', 'latitude': '39.3909816', 'postalCode': '21740'},
   {'fullname': 'Chesapeake Bay', 'states': 'DC,DE,MD,NY,PA,VA,WV', 'parkCode': 'cbpo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '21403'},
   {'fullname': 'Chesapeake Bay Gateways and Watertrails Network', 'states': 'DC,MD,NY,PA,VA,WV', 'parkCode': 'cbgn', 'longitude': '-76.2533569335938', 'latitude': '37.3221206665039', 'postalCode': '0'},
   {'fullname': 'Civil War Defenses of Washington', 'states': 'DC,MD,VA', 'parkCode': 'cwdw', 'longitude': '-77.04998374', 'latitude': '38.93596206', 'postalCode': '20008'},
   {'fullname': 'Constitution Gardens', 'states': 'DC', 'parkCode': 'coga', 'longitude': '-77.04409306', 'latitude': '38.8909354', 'postalCode': '20024'},
   {'fullname': 'Dwight D. Eisenhower Memorial Memorial', 'states': 'DC', 'parkCode': 'ddem', 'longitude': '', 'latitude': '', 'postalCode': '20024'},
   {'fullname': 'Ford\'s Theatre', 'states': 'DC', 'parkCode': 'foth', 'longitude': '-77.02577944', 'latitude': '38.89668819', 'postalCode': '20024'},
   {'fullname': 'Fort Dupont Park', 'states': 'DC', 'parkCode': 'fodu', 'longitude': '-76.94955824', 'latitude': '38.87731289', 'postalCode': '20020'},
   {'fullname': 'Franklin Delano Roosevelt Memorial', 'states': 'DC', 'parkCode': 'frde', 'longitude': '-77.04311542', 'latitude': '38.88341274', 'postalCode': '20002'},
   {'fullname': 'Frederick Douglass National Historic Site', 'states': 'DC', 'parkCode': 'frdo', 'longitude': '-76.98508147', 'latitude': '38.86298458', 'postalCode': '20020'},
   {'fullname': 'George Washington Memorial Parkway', 'states': 'DC,MD,VA', 'parkCode': 'gwmp', 'longitude': '-77.08528147', 'latitude': '38.85452263', 'postalCode': '22101'},
   {'fullname': 'Kenilworth Park & Aquatic Gardens', 'states': 'DC', 'parkCode': 'keaq', 'longitude': '-76.94340616', 'latitude': '38.91284776', 'postalCode': '20020'},
   {'fullname': 'Korean War Veterans Memorial', 'states': 'DC', 'parkCode': 'kowa', 'longitude': '-77.04773857', 'latitude': '38.88784226', 'postalCode': '20002'},
   {'fullname': 'LBJ Memorial Grove on the Potomac', 'states': 'DC', 'parkCode': 'lyba', 'longitude': '-77.05145832', 'latitude': '38.87858036', 'postalCode': '22101'},
   {'fullname': 'Lincoln Memorial', 'states': 'DC', 'parkCode': 'linc', 'longitude': '-77.05017778', 'latitude': '38.88927229', 'postalCode': '20024'},
   {'fullname': 'Martin Luther King, Jr. Memorial', 'states': 'DC', 'parkCode': 'mlkm', 'longitude': '-77.0442195534', 'latitude': '38.8862276865', 'postalCode': '20024'},
   {'fullname': 'Mary McLeod Bethune Council House National Historic Site', 'states': 'DC', 'parkCode': 'mamc', 'longitude': '-77.03096742', 'latitude': '38.90819107', 'postalCode': '20005'},
   {'fullname': 'National Capital Parks-East', 'states': 'DC', 'parkCode': 'nace', 'longitude': '-76.98495791', 'latitude': '38.85301412', 'postalCode': '20020'},
   {'fullname': 'National Mall and Memorial Parks', 'states': 'DC', 'parkCode': 'nama', 'longitude': '-77.03586953', 'latitude': '38.88162683', 'postalCode': '20024'},
   {'fullname': 'Pennsylvania Avenue', 'states': 'DC', 'parkCode': 'paav', 'longitude': '-77.02506554', 'latitude': '38.89426856', 'postalCode': '20024'},
   {'fullname': 'Potomac Heritage National Scenic Trail', 'states': 'DC,MD,PA,VA', 'parkCode': 'pohe', 'longitude': '-77.5230108485372', 'latitude': '39.1506013340668', 'postalCode': '20242'},
   {'fullname': 'President\'s Park (White House)', 'states': 'DC', 'parkCode': 'whho', 'longitude': '-77.03654147', 'latitude': '38.89541886', 'postalCode': '20230'},
   {'fullname': 'Rock Creek Park', 'states': 'DC', 'parkCode': 'rocr', 'longitude': '-77.05002838', 'latitude': '38.95125063', 'postalCode': '20015'},
   {'fullname': 'Star-Spangled Banner National Historic Trail', 'states': 'MD,VA,DC', 'parkCode': 'stsp', 'longitude': '-76.6034317017', 'latitude': '39.2872505188', 'postalCode': '21230'},
   {'fullname': 'Theodore Roosevelt Island', 'states': 'DC', 'parkCode': 'this', 'longitude': '-77.06241918', 'latitude': '38.89584162', 'postalCode': '22101'},
   {'fullname': 'Thomas Jefferson Memorial', 'states': 'DC', 'parkCode': 'thje', 'longitude': '-77.03632572', 'latitude': '38.88101431', 'postalCode': '200024'},
   {'fullname': 'Vietnam Veterans Memorial', 'states': 'DC', 'parkCode': 'vive', 'longitude': '-77.04765735', 'latitude': '38.89096297', 'postalCode': '20024'},
   {'fullname': 'Washington Monument', 'states': 'DC', 'parkCode': 'wamo', 'longitude': '-77.03546586', 'latitude': '38.88865182', 'postalCode': '20024'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'World War II Memorial', 'states': 'DC', 'parkCode': 'wwii', 'longitude': '-77.0403759', 'latitude': '38.88923917', 'postalCode': '20024'},
   {'fullname': 'Big Cypress National Preserve', 'states': 'FL', 'parkCode': 'bicy', 'longitude': '-81.08120629', 'latitude': '25.97079602', 'postalCode': '34141'},
   {'fullname': 'Biscayne National Park', 'states': 'FL', 'parkCode': 'bisc', 'longitude': '-80.21023851', 'latitude': '25.490587', 'postalCode': '33033'},
   {'fullname': 'Canaveral National Seashore', 'states': 'FL', 'parkCode': 'cana', 'longitude': '-80.75419576', 'latitude': '28.78637529', 'postalCode': '32169'},
   {'fullname': 'Castillo de San Marcos National Monument', 'states': 'FL', 'parkCode': 'casa', 'longitude': '-81.31217173', 'latitude': '29.89785701', 'postalCode': '32084'},
   {'fullname': 'De Soto National Memorial', 'states': 'FL', 'parkCode': 'deso', 'longitude': '-82.64335416', 'latitude': '27.52272613', 'postalCode': '34209'},
   {'fullname': 'Dry Tortugas National Park', 'states': 'FL', 'parkCode': 'drto', 'longitude': '-82.87319', 'latitude': '24.628741', 'postalCode': '33034'},
   {'fullname': 'Everglades National Park', 'states': 'FL', 'parkCode': 'ever', 'longitude': '-80.88200301', 'latitude': '25.37294225', 'postalCode': '33034'},
   {'fullname': 'Fort Matanzas National Monument', 'states': 'FL', 'parkCode': 'foma', 'longitude': '-81.23567535', 'latitude': '29.7121489', 'postalCode': '32080'},
   {'fullname': 'Gulf Islands National Seashore', 'states': 'FL,MS', 'parkCode': 'guis', 'longitude': '-87.75064297', 'latitude': '30.29924926', 'postalCode': '32563'},
   {'fullname': 'Gullah/Geechee Cultural Heritage Corridor', 'states': 'FL,GA,NC,SC', 'parkCode': 'guge', 'longitude': '-79.8232242465019', 'latitude': '32.8470785915852', 'postalCode': '29455'},
   {'fullname': 'Timucuan Ecological & Historic Preserve', 'states': 'FL', 'parkCode': 'timu', 'longitude': '-81.49950104', 'latitude': '30.47251894', 'postalCode': '32225'},
   {'fullname': 'Andersonville National Historic Site', 'states': 'GA', 'parkCode': 'ande', 'longitude': '-84.12988898', 'latitude': '32.19831758', 'postalCode': '31711'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Arabia Mountain National Heritage Area', 'states': 'GA', 'parkCode': 'armo', 'longitude': '-84.1584930419922', 'latitude': '33.6085739135742', 'postalCode': '30038'},
   {'fullname': 'Augusta Canal National Heritage Area', 'states': 'GA', 'parkCode': 'auca', 'longitude': '-82.0053787231445', 'latitude': '33.5099067687988', 'postalCode': '30901'},
   {'fullname': 'Chattahoochee River National Recreation Area', 'states': 'GA', 'parkCode': 'chat', 'longitude': '-84.28953177', 'latitude': '33.99698333', 'postalCode': '30350'},
   {'fullname': 'Chickamauga & Chattanooga National Military Park', 'states': 'GA,TN', 'parkCode': 'chch', 'longitude': '-85.28749537', 'latitude': '34.94317623', 'postalCode': '30742'},
   {'fullname': 'Cumberland Island National Seashore', 'states': 'GA', 'parkCode': 'cuis', 'longitude': '-81.45253575', 'latitude': '30.85857484', 'postalCode': '31558'},
   {'fullname': 'Fort Frederica National Monument', 'states': 'GA', 'parkCode': 'fofr', 'longitude': '-81.39452014', 'latitude': '31.2214699', 'postalCode': '31522'},
   {'fullname': 'Fort Pulaski National Monument', 'states': 'GA', 'parkCode': 'fopu', 'longitude': '-80.93361681', 'latitude': '32.0308274', 'postalCode': '31410'},
   {'fullname': 'Gullah/Geechee Cultural Heritage Corridor', 'states': 'FL,GA,NC,SC', 'parkCode': 'guge', 'longitude': '-79.8232242465019', 'latitude': '32.8470785915852', 'postalCode': '29455'},
   {'fullname': 'Jimmy Carter National Historic Site', 'states': 'GA', 'parkCode': 'jica', 'longitude': '-84.41606653', 'latitude': '32.03059943', 'postalCode': '31780'},
   {'fullname': 'Kennesaw Mountain National Battlefield Park', 'states': 'GA', 'parkCode': 'kemo', 'longitude': '-84.59214186', 'latitude': '33.95370717', 'postalCode': '30152'},
   {'fullname': 'Martin Luther King, Jr. National Historical Park', 'states': 'GA', 'parkCode': 'malu', 'longitude': '-84.37256768', 'latitude': '33.75618241', 'postalCode': '30312'},
   {'fullname': 'Ocmulgee Mounds National Historical Park', 'states': 'GA', 'parkCode': 'ocmu', 'longitude': '-83.60224853', 'latitude': '32.83816576', 'postalCode': '31217'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'War In The Pacific National Historical Park', 'states': 'GU', 'parkCode': 'wapa', 'longitude': '144.6922461', 'latitude': '13.43795691', 'postalCode': '96910'},
   {'fullname': 'Ala Kahakai National Historic Trail', 'states': 'HI', 'parkCode': 'alka', 'longitude': '', 'latitude': '', 'postalCode': '96740'},
   {'fullname': 'Haleakalā National Park', 'states': 'HI', 'parkCode': 'hale', 'longitude': '-156.1591775', 'latitude': '20.70693015', 'postalCode': '96768'},
   {'fullname': 'Hawai\'i Volcanoes National Park', 'states': 'HI', 'parkCode': 'havo', 'longitude': '-155.4700257', 'latitude': '19.3355036', 'postalCode': '96718'},
   {'fullname': 'Honouliuli National Historic Site', 'states': 'HI', 'parkCode': 'hono', 'longitude': '-158.0574991', 'latitude': '21.38817536', 'postalCode': '96818'},
   {'fullname': 'Kalaupapa National Historical Park', 'states': 'HI', 'parkCode': 'kala', 'longitude': '-156.9511609', 'latitude': '21.1731108', 'postalCode': '96742'},
   {'fullname': 'Kaloko-Honokōhau National Historical Park', 'states': 'HI', 'parkCode': 'kaho', 'longitude': '-156.0306932', 'latitude': '19.68083237', 'postalCode': '96740'},
   {'fullname': 'Pearl Harbor National Memorial', 'states': 'HI', 'parkCode': 'valr', 'longitude': '-157.938578897697', 'latitude': '21.3670699388264', 'postalCode': '96818'},
   {'fullname': 'Pu`ukoholā Heiau National Historic Site', 'states': 'HI', 'parkCode': 'puhe', 'longitude': '-155.8211629', 'latitude': '20.02772186', 'postalCode': '96743'},
   {'fullname': 'Puʻuhonua o Hōnaunau National Historical Park', 'states': 'HI', 'parkCode': 'puho', 'longitude': '-155.9008789', 'latitude': '19.41268627', 'postalCode': '96726'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'City Of Rocks National Reserve', 'states': 'ID', 'parkCode': 'ciro', 'longitude': '-113.7124097', 'latitude': '42.0699024', 'postalCode': '83312'},
   {'fullname': 'Craters Of The Moon National Monument & Preserve', 'states': 'ID', 'parkCode': 'crmo', 'longitude': '-113.4791609', 'latitude': '43.20345611', 'postalCode': '83213'},
   {'fullname': 'Hagerman Fossil Beds National Monument', 'states': 'ID', 'parkCode': 'hafo', 'longitude': '-114.9443074', 'latitude': '42.79074114', 'postalCode': '83332'},
   {'fullname': 'Ice Age Floods National Geologic Trail', 'states': 'WA,OR,ID,MT', 'parkCode': 'iafl', 'longitude': '', 'latitude': '', 'postalCode': '99116'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Minidoka National Historic Site', 'states': 'ID,WA', 'parkCode': 'miin', 'longitude': '-114.4449868', 'latitude': '42.80586068', 'postalCode': '83332'},
   {'fullname': 'Nez Perce National Historical Park', 'states': 'ID,MT,OR,WA', 'parkCode': 'nepe', 'longitude': '-115.8761258', 'latitude': '46.07019093', 'postalCode': '83540-9715'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Yellowstone National Park', 'states': 'ID,MT,WY', 'parkCode': 'yell', 'longitude': '-110.5471695', 'latitude': '44.59824417', 'postalCode': '82190'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Lincoln Home National Historic Site', 'states': 'IL', 'parkCode': 'liho', 'longitude': '-89.64513397', 'latitude': '39.79715642', 'postalCode': '62701'},
   {'fullname': 'Mormon Pioneer National Historic Trail', 'states': 'IL,IA,NE,UT,WY', 'parkCode': 'mopi', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Pullman National Monument', 'states': 'IL', 'parkCode': 'pull', 'longitude': '-87.60873824', 'latitude': '41.69429163', 'postalCode': '60628'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'George Rogers Clark National Historical Park', 'states': 'IN', 'parkCode': 'gero', 'longitude': '-87.53545212', 'latitude': '38.67912659', 'postalCode': '47591'},
   {'fullname': 'Indiana Dunes National Park', 'states': 'IN', 'parkCode': 'indu', 'longitude': '-87.09647445', 'latitude': '41.63765525', 'postalCode': '46304'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Lincoln Boyhood National Memorial', 'states': 'IN', 'parkCode': 'libo', 'longitude': '-86.99656861', 'latitude': '38.11817004', 'postalCode': '47552'},
   {'fullname': 'Effigy Mounds National Monument', 'states': 'IA', 'parkCode': 'efmo', 'longitude': '-91.19687517', 'latitude': '43.08095081', 'postalCode': '52146'},
   {'fullname': 'Herbert Hoover National Historic Site', 'states': 'IA', 'parkCode': 'heho', 'longitude': '-91.35232139', 'latitude': '41.66793558', 'postalCode': '52358'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Mormon Pioneer National Historic Trail', 'states': 'IL,IA,NE,UT,WY', 'parkCode': 'mopi', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Brown v. Board of Education National Historic Site', 'states': 'KS', 'parkCode': 'brvb', 'longitude': '-95.67614437', 'latitude': '39.03787665', 'postalCode': '66612-1143'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Fort Larned National Historic Site', 'states': 'KS', 'parkCode': 'fols', 'longitude': '-99.21836664', 'latitude': '38.18047491', 'postalCode': '67550'},
   {'fullname': 'Fort Scott National Historic Site', 'states': 'KS', 'parkCode': 'fosc', 'longitude': '-94.70429174', 'latitude': '37.84358849', 'postalCode': '66701'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Nicodemus National Historic Site', 'states': 'KS', 'parkCode': 'nico', 'longitude': '-99.61680329', 'latitude': '39.39167606', 'postalCode': '67625-3015'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Santa Fe National Historic Trail', 'states': 'CO,KS,MO,NM,OK', 'parkCode': 'safe', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Tallgrass Prairie National Preserve', 'states': 'KS', 'parkCode': 'tapr', 'longitude': '-96.5670822', 'latitude': '38.44023613', 'postalCode': '66869'},
   {'fullname': 'Abraham Lincoln Birthplace National Historical Park', 'states': 'KY', 'parkCode': 'abli', 'longitude': '-85.67330523', 'latitude': '37.5858662', 'postalCode': '42748'},
   {'fullname': 'Big South Fork National River & Recreation Area', 'states': 'KY,TN', 'parkCode': 'biso', 'longitude': '-84.66506688', 'latitude': '36.5348388', 'postalCode': '37841'},
   {'fullname': 'Camp Nelson National Monument', 'states': 'KY', 'parkCode': 'cane', 'longitude': '-84.5981683059999', 'latitude': '37.7970179912726', 'postalCode': '40356'},
   {'fullname': 'Cumberland Gap National Historical Park', 'states': 'KY,TN,VA', 'parkCode': 'cuga', 'longitude': '-83.6114083', 'latitude': '36.62503076', 'postalCode': '40965'},
   {'fullname': 'Fort Donelson National Battlefield', 'states': 'KY,TN', 'parkCode': 'fodo', 'longitude': '-87.92445695', 'latitude': '36.49019078', 'postalCode': '37058'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Mammoth Cave National Park', 'states': 'KY', 'parkCode': 'maca', 'longitude': '-86.13090198', 'latitude': '37.19760458', 'postalCode': '42259-0007'},
   {'fullname': 'Mill Springs Battlefield National Monument', 'states': 'KY', 'parkCode': 'misp', 'longitude': '', 'latitude': '', 'postalCode': '42544'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Atchafalaya National Heritage Area', 'states': 'LA', 'parkCode': 'attr', 'longitude': '-91.5019378662109', 'latitude': '30.2919769287109', 'postalCode': '70517'},
   {'fullname': 'Cane River Creole National Historical Park', 'states': 'LA', 'parkCode': 'cari', 'longitude': '-93.00131977', 'latitude': '31.65408447', 'postalCode': '71457'},
   {'fullname': 'Cane River National Heritage Area', 'states': 'LA', 'parkCode': 'crha', 'longitude': '-92.9234390258789', 'latitude': '31.5982227325439', 'postalCode': '71457'},
   {'fullname': 'El Camino Real de los Tejas National Historic Trail', 'states': 'TX,LA', 'parkCode': 'elte', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Jean Lafitte National Historical Park and Preserve', 'states': 'LA', 'parkCode': 'jela', 'longitude': '-90.1402241', 'latitude': '29.81739855', 'postalCode': '70130'},
   {'fullname': 'New Orleans Jazz National Historical Park', 'states': 'LA', 'parkCode': 'jazz', 'longitude': '-90.06749669', 'latitude': '29.96303129', 'postalCode': '70116'},
   {'fullname': 'Poverty Point National Monument', 'states': 'LA', 'parkCode': 'popo', 'longitude': '-91.40829834', 'latitude': '32.6424361', 'postalCode': '71266'},
   {'fullname': 'Vicksburg National Military Park', 'states': 'MS,LA', 'parkCode': 'vick', 'longitude': '-90.85030186', 'latitude': '32.3621286', 'postalCode': '39183'},
   {'fullname': 'Acadia National Park', 'states': 'ME', 'parkCode': 'acad', 'longitude': '-68.30063316', 'latitude': '44.30777545', 'postalCode': '04609'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Katahdin Woods and Waters National Monument', 'states': 'ME', 'parkCode': 'kaww', 'longitude': '-68.712287902832', 'latitude': '45.9567565917969', 'postalCode': '04765'},
   {'fullname': 'Maine Acadian Culture', 'states': 'ME', 'parkCode': 'maac', 'longitude': '-68.4110870361', 'latitude': '47.2831115723', 'postalCode': '04756'},
   {'fullname': 'Roosevelt Campobello International Park', 'states': 'ME', 'parkCode': 'roca', 'longitude': '-66.96209908', 'latitude': '44.87357167', 'postalCode': '04652'},
   {'fullname': 'Saint Croix Island International Historic Site', 'states': 'ME', 'parkCode': 'sacr', 'longitude': '-67.13363651', 'latitude': '45.12858838', 'postalCode': '04619'},
   {'fullname': 'Antietam National Battlefield', 'states': 'MD', 'parkCode': 'anti', 'longitude': '-77.73828017', 'latitude': '39.46763452', 'postalCode': '21782'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Assateague Island National Seashore', 'states': 'MD,VA', 'parkCode': 'asis', 'longitude': '-75.24524611', 'latitude': '38.05593172', 'postalCode': '21811'},
   {'fullname': 'Baltimore National Heritage Area', 'states': 'MD', 'parkCode': 'balt', 'longitude': '-76.6284027099609', 'latitude': '39.2904968261719', 'postalCode': '21201'},
   {'fullname': 'Baltimore-Washington Parkway', 'states': 'MD', 'parkCode': 'bawa', 'longitude': '-76.85410921', 'latitude': '39.02604289', 'postalCode': '20770'},
   {'fullname': 'Captain John Smith Chesapeake National Historic Trail', 'states': 'VA,MD,DE,DC,PA,NY', 'parkCode': 'cajo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '23690'},
   {'fullname': 'Catoctin Mountain Park', 'states': 'MD', 'parkCode': 'cato', 'longitude': '-77.46417665', 'latitude': '39.65068457', 'postalCode': '21788'},
   {'fullname': 'Chesapeake & Ohio Canal National Historical Park', 'states': 'DC,MD,WV', 'parkCode': 'choh', 'longitude': '-77.89763546', 'latitude': '39.3909816', 'postalCode': '21740'},
   {'fullname': 'Chesapeake Bay', 'states': 'DC,DE,MD,NY,PA,VA,WV', 'parkCode': 'cbpo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '21403'},
   {'fullname': 'Chesapeake Bay Gateways and Watertrails Network', 'states': 'DC,MD,NY,PA,VA,WV', 'parkCode': 'cbgn', 'longitude': '-76.2533569335938', 'latitude': '37.3221206665039', 'postalCode': '0'},
   {'fullname': 'Civil War Defenses of Washington', 'states': 'DC,MD,VA', 'parkCode': 'cwdw', 'longitude': '-77.04998374', 'latitude': '38.93596206', 'postalCode': '20008'},
   {'fullname': 'Clara Barton National Historic Site', 'states': 'MD', 'parkCode': 'clba', 'longitude': '-77.14009689', 'latitude': '38.96762882', 'postalCode': '20812'},
   {'fullname': 'Fort Foote Park', 'states': 'MD', 'parkCode': 'fofo', 'longitude': '-77.02812387', 'latitude': '38.76901785', 'postalCode': '20744'},
   {'fullname': 'Fort McHenry National Monument and Historic Shrine', 'states': 'MD', 'parkCode': 'fomc', 'longitude': '-76.58044165', 'latitude': '39.26395314', 'postalCode': '21230'},
   {'fullname': 'Fort Washington Park', 'states': 'MD', 'parkCode': 'fowa', 'longitude': '-77.02174195', 'latitude': '38.70875364', 'postalCode': '20744'},
   {'fullname': 'George Washington Memorial Parkway', 'states': 'DC,MD,VA', 'parkCode': 'gwmp', 'longitude': '-77.08528147', 'latitude': '38.85452263', 'postalCode': '22101'},
   {'fullname': 'Glen Echo Park', 'states': 'MD', 'parkCode': 'glec', 'longitude': '-77.14012206', 'latitude': '38.96912315', 'postalCode': '20812'},
   {'fullname': 'Greenbelt Park', 'states': 'MD', 'parkCode': 'gree', 'longitude': '-76.89722133', 'latitude': '38.98328267', 'postalCode': '20770'},
   {'fullname': 'Hampton National Historic Site', 'states': 'MD', 'parkCode': 'hamp', 'longitude': '-76.58781182', 'latitude': '39.4175296', 'postalCode': '21286'},
   {'fullname': 'Harmony Hall', 'states': 'MD', 'parkCode': 'haha', 'longitude': '-77.00377069', 'latitude': '38.74646351', 'postalCode': '20744'},
   {'fullname': 'Harpers Ferry National Historical Park', 'states': 'WV,VA,MD', 'parkCode': 'hafe', 'longitude': '-77.74088546', 'latitude': '39.31865949', 'postalCode': '25425'},
   {'fullname': 'Harriet Tubman Underground Railroad National Historical Park', 'states': 'MD', 'parkCode': 'hatu', 'longitude': '-76.1373451375579', 'latitude': '38.4548643510713', 'postalCode': '21622'},
   {'fullname': 'Journey Through Hallowed Ground National Heritage Area', 'states': 'MD,PA,WV,VA', 'parkCode': 'jthg', 'longitude': '-77.8056488037109', 'latitude': '38.8904075622559', 'postalCode': '20197'},
   {'fullname': 'Monocacy National Battlefield', 'states': 'MD', 'parkCode': 'mono', 'longitude': '-77.39637677', 'latitude': '39.36084236', 'postalCode': '21704'},
   {'fullname': 'Oxon Cove  Park & Oxon Hill Farm', 'states': 'MD', 'parkCode': 'oxhi', 'longitude': '-77.01131457', 'latitude': '38.80578214', 'postalCode': '20745'},
   {'fullname': 'Piscataway Park', 'states': 'MD', 'parkCode': 'pisc', 'longitude': '-77.06659744', 'latitude': '38.68679958', 'postalCode': '20616'},
   {'fullname': 'Potomac Heritage National Scenic Trail', 'states': 'DC,MD,PA,VA', 'parkCode': 'pohe', 'longitude': '-77.5230108485372', 'latitude': '39.1506013340668', 'postalCode': '20242'},
   {'fullname': 'Star-Spangled Banner National Historic Trail', 'states': 'MD,VA,DC', 'parkCode': 'stsp', 'longitude': '-76.6034317017', 'latitude': '39.2872505188', 'postalCode': '21230'},
   {'fullname': 'Thomas Stone National Historic Site', 'states': 'MD', 'parkCode': 'thst', 'longitude': '-77.037813', 'latitude': '38.52934443', 'postalCode': '20677'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'Adams National Historical Park', 'states': 'MA', 'parkCode': 'adam', 'longitude': '-71.01160356', 'latitude': '42.2553961', 'postalCode': '02169'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Blackstone River Valley National Historical Park', 'states': 'RI,MA', 'parkCode': 'blrv', 'longitude': '-71.6462543418673', 'latitude': '42.0985434981132', 'postalCode': '01588'},
   {'fullname': 'Boston African American National Historic Site', 'states': 'MA', 'parkCode': 'boaf', 'longitude': '-71.06764181', 'latitude': '42.35908295', 'postalCode': '02109'},
   {'fullname': 'Boston Harbor Islands National Recreation Area', 'states': 'MA', 'parkCode': 'boha', 'longitude': '-70.93941138', 'latitude': '42.30905526', 'postalCode': '02109'},
   {'fullname': 'Boston National Historical Park', 'states': 'MA', 'parkCode': 'bost', 'longitude': '-71.05536763', 'latitude': '42.36957407', 'postalCode': '02129'},
   {'fullname': 'Cape Cod National Seashore', 'states': 'MA', 'parkCode': 'caco', 'longitude': '-70.04319832', 'latitude': '41.92381465', 'postalCode': '02667'},
   {'fullname': 'Essex National Heritage Area', 'states': 'MA', 'parkCode': 'esse', 'longitude': '-70.9571075439453', 'latitude': '42.6678314208984', 'postalCode': '01970'},
   {'fullname': 'Frederick Law Olmsted National Historic Site', 'states': 'MA', 'parkCode': 'frla', 'longitude': '-71.13202567', 'latitude': '42.32424266', 'postalCode': '02445'},
   {'fullname': 'John Fitzgerald Kennedy National Historic Site', 'states': 'MA', 'parkCode': 'jofi', 'longitude': '-71.12323846', 'latitude': '42.34693694', 'postalCode': '02446'},
   {'fullname': 'John H. Chafee Blackstone River Valley National Heritage Corridor', 'states': 'MA,RI', 'parkCode': 'blac', 'longitude': '-71.668818', 'latitude': '42.201158', 'postalCode': '01588'},
   {'fullname': 'Longfellow House Washington\'s Headquarters National Historic Site', 'states': 'MA', 'parkCode': 'long', 'longitude': '-71.12636956', 'latitude': '42.37698854', 'postalCode': '02138'},
   {'fullname': 'Lowell National Historical Park', 'states': 'MA', 'parkCode': 'lowe', 'longitude': '-71.31588673', 'latitude': '42.6455371', 'postalCode': '01852'},
   {'fullname': 'Minute Man National Historical Park', 'states': 'MA', 'parkCode': 'mima', 'longitude': '-71.30738884', 'latitude': '42.4562778', 'postalCode': '01742'},
   {'fullname': 'New Bedford Whaling National Historical Park', 'states': 'MA', 'parkCode': 'nebe', 'longitude': '-70.92322321', 'latitude': '41.63540552', 'postalCode': '02740'},
   {'fullname': 'New England National Scenic Trail', 'states': 'MA,CT', 'parkCode': 'neen', 'longitude': '-72.5242767333984', 'latitude': '42.2915819136851', 'postalCode': '02109'},
   {'fullname': 'Salem Maritime National Historic Site', 'states': 'MA', 'parkCode': 'sama', 'longitude': '-70.88640867', 'latitude': '42.52024529', 'postalCode': '01970'},
   {'fullname': 'Saugus Iron Works National Historic Site', 'states': 'MA', 'parkCode': 'sair', 'longitude': '-71.0076953', 'latitude': '42.46830664', 'postalCode': '01906'},
   {'fullname': 'Springfield Armory National Historic Site', 'states': 'MA', 'parkCode': 'spar', 'longitude': '-72.57967415', 'latitude': '42.1086368', 'postalCode': '01105'},
   {'fullname': 'The Last Green Valley National Heritage Corridor', 'states': 'CT,MA', 'parkCode': 'qush', 'longitude': '', 'latitude': '', 'postalCode': '06239'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'Isle Royale National Park', 'states': 'MI', 'parkCode': 'isro', 'longitude': '-88.82780657', 'latitude': '48.01145819', 'postalCode': '49931'},
   {'fullname': 'Keweenaw National Historical Park', 'states': 'MI', 'parkCode': 'kewe', 'longitude': '-88.52275344', 'latitude': '47.1792308', 'postalCode': '49913'},
   {'fullname': 'Motor Cities National Heritage Area', 'states': 'MI', 'parkCode': 'auto', 'longitude': '-83.8187713623047', 'latitude': '42.518180847168', 'postalCode': '48243'},
   {'fullname': 'North Country National Scenic Trail', 'states': 'MI,MN,ND,NY,OH,PA,VT,WI', 'parkCode': 'noco', 'longitude': '', 'latitude': '', 'postalCode': '49331'},
   {'fullname': 'Pictured Rocks National Lakeshore', 'states': 'MI', 'parkCode': 'piro', 'longitude': '-86.31628733', 'latitude': '46.56435642', 'postalCode': '49862'},
   {'fullname': 'River Raisin National Battlefield Park', 'states': 'MI', 'parkCode': 'rira', 'longitude': '-83.37620464', 'latitude': '41.91291085', 'postalCode': '48162'},
   {'fullname': 'Sleeping Bear Dunes National Lakeshore', 'states': 'MI', 'parkCode': 'slbe', 'longitude': '-86.02706591', 'latitude': '44.92844962', 'postalCode': '49630'},
   {'fullname': 'Grand Portage National Monument', 'states': 'MN', 'parkCode': 'grpo', 'longitude': '-89.75573031', 'latitude': '47.99294217', 'postalCode': '55605'},
   {'fullname': 'Mississippi National River and Recreation Area', 'states': 'MN', 'parkCode': 'miss', 'longitude': '-93.098712', 'latitude': '44.942487', 'postalCode': '55101'},
   {'fullname': 'North Country National Scenic Trail', 'states': 'MI,MN,ND,NY,OH,PA,VT,WI', 'parkCode': 'noco', 'longitude': '', 'latitude': '', 'postalCode': '49331'},
   {'fullname': 'Pipestone National Monument', 'states': 'MN', 'parkCode': 'pipe', 'longitude': '-96.32475523', 'latitude': '44.01351958', 'postalCode': '56164'},
   {'fullname': 'Saint Croix National Scenic Riverway', 'states': 'WI,MN', 'parkCode': 'sacn', 'longitude': '-92.36126685', 'latitude': '45.70019235', 'postalCode': '54024'},
   {'fullname': 'Voyageurs National Park', 'states': 'MN', 'parkCode': 'voya', 'longitude': '-92.8382913', 'latitude': '48.48370609', 'postalCode': '56649'},
   {'fullname': 'Brices Cross Roads National Battlefield Site', 'states': 'MS', 'parkCode': 'brcr', 'longitude': '-88.72889343', 'latitude': '34.50611958', 'postalCode': '38804'},
   {'fullname': 'Gulf Islands National Seashore', 'states': 'FL,MS', 'parkCode': 'guis', 'longitude': '-87.75064297', 'latitude': '30.29924926', 'postalCode': '32563'},
   {'fullname': 'Mississippi Delta National Heritage Area', 'states': 'MS', 'parkCode': 'mide', 'longitude': '-90.4317092895508', 'latitude': '33.6042976379395', 'postalCode': '38733'},
   {'fullname': 'Mississippi Gulf National Heritage Area', 'states': 'MS', 'parkCode': 'migu', 'longitude': '-89.1123809814453', 'latitude': '30.6482753753662', 'postalCode': '39530'},
   {'fullname': 'Mississippi Hills National Heritage Area', 'states': 'MS', 'parkCode': 'mihi', 'longitude': '-89.0573120117188', 'latitude': '34.0813598632813', 'postalCode': '38804'},
   {'fullname': 'Natchez National Historical Park', 'states': 'MS', 'parkCode': 'natc', 'longitude': '-91.39040665', 'latitude': '31.54697621', 'postalCode': '39120'},
   {'fullname': 'Natchez Trace National Scenic Trail', 'states': 'AL,MS,TN', 'parkCode': 'natt', 'longitude': '-88.7100104093552', 'latitude': '34.3302903330188', 'postalCode': '38804'},
   {'fullname': 'Natchez Trace Parkway', 'states': 'AL,MS,TN', 'parkCode': 'natr', 'longitude': '-89.03092439', 'latitude': '33.78002293', 'postalCode': '38804'},
   {'fullname': 'Shiloh National Military Park', 'states': 'TN,MS', 'parkCode': 'shil', 'longitude': '-88.3421072', 'latitude': '35.13850907', 'postalCode': '38376'},
   {'fullname': 'Tupelo National Battlefield', 'states': 'MS', 'parkCode': 'tupe', 'longitude': '-88.73708623', 'latitude': '34.25557705', 'postalCode': '38804'},
   {'fullname': 'Vicksburg National Military Park', 'states': 'MS,LA', 'parkCode': 'vick', 'longitude': '-90.85030186', 'latitude': '32.3621286', 'postalCode': '39183'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Gateway Arch National Park', 'states': 'MO', 'parkCode': 'jeff', 'longitude': '-90.1892508', 'latitude': '38.6258069', 'postalCode': '63102'},
   {'fullname': 'George Washington Carver National Monument', 'states': 'MO', 'parkCode': 'gwca', 'longitude': '-94.35522737', 'latitude': '36.9871322', 'postalCode': '64840'},
   {'fullname': 'Harry S Truman National Historic Site', 'states': 'MO', 'parkCode': 'hstr', 'longitude': '-94.5162488', 'latitude': '38.92711967', 'postalCode': '64050'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Ozark National Scenic Riverways', 'states': 'MO', 'parkCode': 'ozar', 'longitude': '-91.25709817', 'latitude': '37.13968894', 'postalCode': '63965'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Santa Fe National Historic Trail', 'states': 'CO,KS,MO,NM,OK', 'parkCode': 'safe', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Ulysses S Grant National Historic Site', 'states': 'MO', 'parkCode': 'ulsg', 'longitude': '-90.35169255', 'latitude': '38.55182374', 'postalCode': '63123'},
   {'fullname': 'Wilson\'s Creek National Battlefield', 'states': 'MO', 'parkCode': 'wicr', 'longitude': '-93.40986704', 'latitude': '37.1000127', 'postalCode': '65738'},
   {'fullname': 'Big Hole National Battlefield', 'states': 'MT', 'parkCode': 'biho', 'longitude': '-113.6458443', 'latitude': '45.64647324', 'postalCode': '59761'},
   {'fullname': 'Bighorn Canyon National Recreation Area', 'states': 'MT,WY', 'parkCode': 'bica', 'longitude': '-108.1443943', 'latitude': '45.13154227', 'postalCode': '82435'},
   {'fullname': 'Fort Union Trading Post National Historic Site', 'states': 'MT,ND', 'parkCode': 'fous', 'longitude': '-104.0375238', 'latitude': '48.00075828', 'postalCode': '58801'},
   {'fullname': 'Glacier National Park', 'states': 'MT', 'parkCode': 'glac', 'longitude': '-113.8009306', 'latitude': '48.68414678', 'postalCode': '59936'},
   {'fullname': 'Grant-Kohrs Ranch National Historic Site', 'states': 'MT', 'parkCode': 'grko', 'longitude': '-112.7467024', 'latitude': '46.41358923', 'postalCode': '59722'},
   {'fullname': 'Ice Age Floods National Geologic Trail', 'states': 'WA,OR,ID,MT', 'parkCode': 'iafl', 'longitude': '', 'latitude': '', 'postalCode': '99116'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Little Bighorn Battlefield National Monument', 'states': 'MT', 'parkCode': 'libi', 'longitude': '-107.4183614', 'latitude': '45.55633048', 'postalCode': '59022'},
   {'fullname': 'Nez Perce National Historical Park', 'states': 'ID,MT,OR,WA', 'parkCode': 'nepe', 'longitude': '-115.8761258', 'latitude': '46.07019093', 'postalCode': '83540-9715'},
   {'fullname': 'Yellowstone National Park', 'states': 'ID,MT,WY', 'parkCode': 'yell', 'longitude': '-110.5471695', 'latitude': '44.59824417', 'postalCode': '82190'},
   {'fullname': 'Agate Fossil Beds National Monument', 'states': 'NE', 'parkCode': 'agfo', 'longitude': '-103.753886', 'latitude': '42.42170419', 'postalCode': '69346'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Homestead National Monument of America', 'states': 'NE', 'parkCode': 'home', 'longitude': '-96.83387781', 'latitude': '40.28802381', 'postalCode': '68310'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Missouri National Recreational River', 'states': 'SD,NE', 'parkCode': 'mnrr', 'longitude': '-97.59077822', 'latitude': '42.7882189', 'postalCode': '57078'},
   {'fullname': 'Mormon Pioneer National Historic Trail', 'states': 'IL,IA,NE,UT,WY', 'parkCode': 'mopi', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Niobrara National Scenic River', 'states': 'NE', 'parkCode': 'niob', 'longitude': '-99.91870646', 'latitude': '42.79413083', 'postalCode': '69201'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Scotts Bluff National Monument', 'states': 'NE', 'parkCode': 'scbl', 'longitude': '-103.7071351', 'latitude': '41.83464193', 'postalCode': '69341'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Death Valley National Park', 'states': 'CA,NV', 'parkCode': 'deva', 'longitude': '-117.134395', 'latitude': '36.48753731', 'postalCode': '92328'},
   {'fullname': 'Great Basin National Park', 'states': 'NV', 'parkCode': 'grba', 'longitude': '-114.2579782', 'latitude': '38.94617378', 'postalCode': '89311'},
   {'fullname': 'Lake Mead National Recreation Area', 'states': 'AZ,NV', 'parkCode': 'lake', 'longitude': '-114.3469067', 'latitude': '35.96622528', 'postalCode': '89005'},
   {'fullname': 'Old Spanish National Historic Trail', 'states': 'AZ,CA,CO,NV,NM,UT', 'parkCode': 'olsp', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Tule Springs Fossil Beds National Monument', 'states': 'NV', 'parkCode': 'tusk', 'longitude': '-115.3202223', 'latitude': '36.3893217', 'postalCode': '89005'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Saint-Gaudens National Historical Park', 'states': 'NH', 'parkCode': 'saga', 'longitude': '-72.37333969', 'latitude': '43.4997238', 'postalCode': '03745'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Crossroads of the American Revolution National Heritage Area', 'states': 'NJ', 'parkCode': 'xrds', 'longitude': '-74.5613021850586', 'latitude': '40.4621353149414', 'postalCode': '0'},
   {'fullname': 'Delaware Water Gap National Recreation Area', 'states': 'NJ,PA', 'parkCode': 'dewa', 'longitude': '-74.94751173', 'latitude': '41.12793491', 'postalCode': '18324'},
   {'fullname': 'Ellis Island Part of Statue of Liberty National Monument', 'states': 'NJ,NY', 'parkCode': 'elis', 'longitude': '-74.0401', 'latitude': '40.69946', 'postalCode': '07305'},
   {'fullname': 'Gateway National Recreation Area', 'states': 'NY,NJ', 'parkCode': 'gate', 'longitude': '-73.9171087', 'latitude': '40.56536246', 'postalCode': '10305'},
   {'fullname': 'Great Egg Harbor River', 'states': 'NJ', 'parkCode': 'greg', 'longitude': '-74.64969521', 'latitude': '39.30421499', 'postalCode': '19106'},
   {'fullname': 'Lower Delaware National Wild and Scenic River', 'states': 'PA,NJ', 'parkCode': 'lode', 'longitude': '', 'latitude': '', 'postalCode': '19106'},
   {'fullname': 'Morristown National Historical Park', 'states': 'NJ', 'parkCode': 'morr', 'longitude': '-74.53455122', 'latitude': '40.7650755', 'postalCode': '07960'},
   {'fullname': 'New Jersey Pinelands National Reserve', 'states': 'NJ', 'parkCode': 'pine', 'longitude': '-74.62499857', 'latitude': '39.93835287', 'postalCode': '08064'},
   {'fullname': 'Paterson Great Falls National Historical Park', 'states': 'NJ', 'parkCode': 'pagr', 'longitude': '-74.18021494', 'latitude': '40.91584645', 'postalCode': '07501'},
   {'fullname': 'Thomas Edison National Historical Park', 'states': 'NJ', 'parkCode': 'edis', 'longitude': '-74.23821139', 'latitude': '40.78549896', 'postalCode': '07052'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'Aztec Ruins National Monument', 'states': 'NM', 'parkCode': 'azru', 'longitude': '-107.9999245', 'latitude': '36.83682216', 'postalCode': '87410'},
   {'fullname': 'Bandelier National Monument', 'states': 'NM', 'parkCode': 'band', 'longitude': '-106.3317124', 'latitude': '35.77898596', 'postalCode': '87544'},
   {'fullname': 'Capulin Volcano National Monument', 'states': 'NM', 'parkCode': 'cavo', 'longitude': '-103.9710427', 'latitude': '36.78171096', 'postalCode': '88418'},
   {'fullname': 'Carlsbad Caverns National Park', 'states': 'NM', 'parkCode': 'cave', 'longitude': '-104.5529688', 'latitude': '32.14089463', 'postalCode': '88220'},
   {'fullname': 'Chaco Culture National Historical Park', 'states': 'NM', 'parkCode': 'chcu', 'longitude': '-107.9560076', 'latitude': '36.03963414', 'postalCode': '87037'},
   {'fullname': 'El Camino Real de Tierra Adentro National Historic Trail', 'states': 'NM,TX', 'parkCode': 'elca', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'El Malpais National Monument', 'states': 'NM', 'parkCode': 'elma', 'longitude': '-107.9950948', 'latitude': '34.88422799', 'postalCode': '87020'},
   {'fullname': 'El Morro National Monument', 'states': 'NM', 'parkCode': 'elmo', 'longitude': '-108.3463984', 'latitude': '35.03895916', 'postalCode': '87321'},
   {'fullname': 'Fort Union National Monument', 'states': 'NM', 'parkCode': 'foun', 'longitude': '-105.0145185', 'latitude': '35.90700629', 'postalCode': '87753'},
   {'fullname': 'Gila Cliff Dwellings National Monument', 'states': 'NM', 'parkCode': 'gicl', 'longitude': '-108.2706711', 'latitude': '33.22715258', 'postalCode': '88049'},
   {'fullname': 'Manhattan Project National Historical Park', 'states': 'NM,WA,TN', 'parkCode': 'mapr', 'longitude': '-100.8429548', 'latitude': '39.76948167', 'postalCode': '80228'},
   {'fullname': 'Old Spanish National Historic Trail', 'states': 'AZ,CA,CO,NV,NM,UT', 'parkCode': 'olsp', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pecos National Historical Park', 'states': 'NM', 'parkCode': 'peco', 'longitude': '-105.6814684', 'latitude': '35.54192238', 'postalCode': '87552'},
   {'fullname': 'Petroglyph National Monument', 'states': 'NM', 'parkCode': 'petr', 'longitude': '-106.7491456', 'latitude': '35.13915998', 'postalCode': '87120'},
   {'fullname': 'Salinas Pueblo Missions National Monument', 'states': 'NM', 'parkCode': 'sapu', 'longitude': '-106.2050309', 'latitude': '34.35423203', 'postalCode': '87036-0517'},
   {'fullname': 'Santa Fe National Historic Trail', 'states': 'CO,KS,MO,NM,OK', 'parkCode': 'safe', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Valles Caldera National Preserve', 'states': 'NM', 'parkCode': 'vall', 'longitude': '-106.5195724', 'latitude': '35.91682872', 'postalCode': '87025'},
   {'fullname': 'White Sands National Park', 'states': 'NM', 'parkCode': 'whsa', 'longitude': '-106.3333461', 'latitude': '32.77907858', 'postalCode': '88310'},
   {'fullname': 'African Burial Ground National Monument', 'states': 'NY', 'parkCode': 'afbg', 'longitude': '-74.00447358', 'latitude': '40.71452681', 'postalCode': '10007'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Captain John Smith Chesapeake National Historic Trail', 'states': 'VA,MD,DE,DC,PA,NY', 'parkCode': 'cajo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '23690'},
   {'fullname': 'Castle Clinton National Monument', 'states': 'NY', 'parkCode': 'cacl', 'longitude': '-74.01680558', 'latitude': '40.70347795', 'postalCode': '10004'},
   {'fullname': 'Champlain Valley National Heritage Partnership', 'states': 'VT,NY', 'parkCode': 'chva', 'longitude': '-73.4811935424805', 'latitude': '43.9974594116211', 'postalCode': '05458'},
   {'fullname': 'Chesapeake Bay', 'states': 'DC,DE,MD,NY,PA,VA,WV', 'parkCode': 'cbpo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '21403'},
   {'fullname': 'Chesapeake Bay Gateways and Watertrails Network', 'states': 'DC,MD,NY,PA,VA,WV', 'parkCode': 'cbgn', 'longitude': '-76.2533569335938', 'latitude': '37.3221206665039', 'postalCode': '0'},
   {'fullname': 'Eleanor Roosevelt National Historic Site', 'states': 'NY', 'parkCode': 'elro', 'longitude': '-73.89894026', 'latitude': '41.76208482', 'postalCode': '12538'},
   {'fullname': 'Ellis Island Part of Statue of Liberty National Monument', 'states': 'NJ,NY', 'parkCode': 'elis', 'longitude': '-74.0401', 'latitude': '40.69946', 'postalCode': '07305'},
   {'fullname': 'Erie Canalway National Heritage Corridor', 'states': 'NY', 'parkCode': 'erie', 'longitude': '-75.9960784912109', 'latitude': '43.0179443359375', 'postalCode': '12047'},
   {'fullname': 'Federal Hall National Memorial', 'states': 'NY', 'parkCode': 'feha', 'longitude': '-74.01025636', 'latitude': '40.70731192', 'postalCode': '10005'},
   {'fullname': 'Fire Island National Seashore', 'states': 'NY', 'parkCode': 'fiis', 'longitude': '-73.00013462', 'latitude': '40.69668638', 'postalCode': '11772'},
   {'fullname': 'Fort Stanwix National Monument', 'states': 'NY', 'parkCode': 'fost', 'longitude': '-75.45557626', 'latitude': '43.21053441', 'postalCode': '13440'},
   {'fullname': 'Gateway National Recreation Area', 'states': 'NY,NJ', 'parkCode': 'gate', 'longitude': '-73.9171087', 'latitude': '40.56536246', 'postalCode': '10305'},
   {'fullname': 'General Grant National Memorial', 'states': 'NY', 'parkCode': 'gegr', 'longitude': '-73.96331542', 'latitude': '40.81332817', 'postalCode': '10027'},
   {'fullname': 'Governors Island National Monument', 'states': 'NY', 'parkCode': 'gois', 'longitude': '-74.01670765', 'latitude': '40.69164233', 'postalCode': '10004-1921'},
   {'fullname': 'Hamilton Grange National Memorial', 'states': 'NY', 'parkCode': 'hagr', 'longitude': '-73.94878487', 'latitude': '40.81871605', 'postalCode': '10031'},
   {'fullname': 'Harriet Tubman National Historical Park', 'states': 'NY', 'parkCode': 'hart', 'longitude': '-76.5646715462208', 'latitude': '42.9128920286894', 'postalCode': '13021-0769'},
   {'fullname': 'Home Of Franklin D Roosevelt National Historic Site', 'states': 'NY', 'parkCode': 'hofr', 'longitude': '-73.92516857', 'latitude': '41.76639758', 'postalCode': '12538'},
   {'fullname': 'Hudson River Valley National Heritage Area', 'states': 'NY', 'parkCode': 'hurv', 'longitude': '-73.9580383300781', 'latitude': '42.0397300720215', 'postalCode': '12210'},
   {'fullname': 'Lower East Side Tenement Museum National Historic Site', 'states': 'NY', 'parkCode': 'loea', 'longitude': '-73.99001777', 'latitude': '40.71861134', 'postalCode': '10002'},
   {'fullname': 'Martin Van Buren National Historic Site', 'states': 'NY', 'parkCode': 'mava', 'longitude': '-73.70834257', 'latitude': '42.36819596', 'postalCode': '12106-3605'},
   {'fullname': 'National Parks of New York Harbor', 'states': 'NY', 'parkCode': 'npnh', 'longitude': '-74.0451049804688', 'latitude': '40.6631915953388', 'postalCode': '10007'},
   {'fullname': 'Niagara Falls National Heritage Area', 'states': 'NY', 'parkCode': 'nifa', 'longitude': '-79.0703277587891', 'latitude': '43.084789276123', 'postalCode': '14109'},
   {'fullname': 'North Country National Scenic Trail', 'states': 'MI,MN,ND,NY,OH,PA,VT,WI', 'parkCode': 'noco', 'longitude': '', 'latitude': '', 'postalCode': '49331'},
   {'fullname': 'Sagamore Hill National Historic Site', 'states': 'NY', 'parkCode': 'sahi', 'longitude': '-73.49686438', 'latitude': '40.88579128', 'postalCode': '11771'},
   {'fullname': 'Saint Paul\'s Church National Historic Site', 'states': 'NY', 'parkCode': 'sapa', 'longitude': '-73.82577276', 'latitude': '40.89283511', 'postalCode': '10550'},
   {'fullname': 'Saratoga National Historical Park', 'states': 'NY', 'parkCode': 'sara', 'longitude': '-73.63386108', 'latitude': '42.99522612', 'postalCode': '12170'},
   {'fullname': 'Statue Of Liberty National Monument', 'states': 'NY', 'parkCode': 'stli', 'longitude': '-74.04232397', 'latitude': '40.69572149', 'postalCode': '10004'},
   {'fullname': 'Stonewall National Monument', 'states': 'NY', 'parkCode': 'ston', 'longitude': '-74.0006866455078', 'latitude': '40.7337799072266', 'postalCode': '10005'},
   {'fullname': 'Theodore Roosevelt Birthplace National Historic Site', 'states': 'NY', 'parkCode': 'thrb', 'longitude': '-73.98903703', 'latitude': '40.7386469', 'postalCode': '10003'},
   {'fullname': 'Theodore Roosevelt Inaugural National Historic Site', 'states': 'NY', 'parkCode': 'thri', 'longitude': '-78.87248411', 'latitude': '42.90146781', 'postalCode': '14202'},
   {'fullname': 'Thomas Cole National Historic Site', 'states': 'NY', 'parkCode': 'thco', 'longitude': '-73.8615486408817', 'latitude': '42.2257060702034', 'postalCode': '12414'},
   {'fullname': 'Upper Delaware Scenic & Recreational River', 'states': 'NY,PA', 'parkCode': 'upde', 'longitude': '-75.03861562', 'latitude': '41.66172578', 'postalCode': '18405'},
   {'fullname': 'Vanderbilt Mansion National Historic Site', 'states': 'NY', 'parkCode': 'vama', 'longitude': '-73.94205557', 'latitude': '41.79697937', 'postalCode': '12538'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'Women\'s Rights National Historical Park', 'states': 'NY', 'parkCode': 'wori', 'longitude': '-76.81655558', 'latitude': '42.90817073', 'postalCode': '13148'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Blue Ridge National Heritage Area', 'states': 'NC', 'parkCode': 'blrn', 'longitude': '-80.8496627807617', 'latitude': '37.1117477416992', 'postalCode': '28803'},
   {'fullname': 'Blue Ridge Parkway', 'states': 'NC,VA', 'parkCode': 'blri', 'longitude': '-81.0420999', 'latitude': '36.53386746', 'postalCode': '28803'},
   {'fullname': 'Cape Hatteras National Seashore', 'states': 'NC', 'parkCode': 'caha', 'longitude': '-75.65061112', 'latitude': '35.41370839', 'postalCode': '27920'},
   {'fullname': 'Cape Lookout National Seashore', 'states': 'NC', 'parkCode': 'calo', 'longitude': '-76.34319082', 'latitude': '34.8267961', 'postalCode': '28531'},
   {'fullname': 'Carl Sandburg Home National Historic Site', 'states': 'NC', 'parkCode': 'carl', 'longitude': '-82.45106258', 'latitude': '35.26815509', 'postalCode': '28731'},
   {'fullname': 'Fort Raleigh National Historic Site', 'states': 'NC', 'parkCode': 'fora', 'longitude': '-75.71496865', 'latitude': '35.93278602', 'postalCode': '27954'},
   {'fullname': 'Great Smoky Mountains National Park', 'states': 'NC,TN', 'parkCode': 'grsm', 'longitude': '-83.50818326', 'latitude': '35.60116374', 'postalCode': '37738'},
   {'fullname': 'Guilford Courthouse National Military Park', 'states': 'NC', 'parkCode': 'guco', 'longitude': '-79.8424561', 'latitude': '36.13225478', 'postalCode': '27410'},
   {'fullname': 'Gullah/Geechee Cultural Heritage Corridor', 'states': 'FL,GA,NC,SC', 'parkCode': 'guge', 'longitude': '-79.8232242465019', 'latitude': '32.8470785915852', 'postalCode': '29455'},
   {'fullname': 'Moores Creek National Battlefield', 'states': 'NC', 'parkCode': 'mocr', 'longitude': '-78.11031134', 'latitude': '34.45820776', 'postalCode': '28435'},
   {'fullname': 'Overmountain Victory National Historic Trail', 'states': 'NC,SC,TN,VA', 'parkCode': 'ovvi', 'longitude': '-81.377', 'latitude': '35.14044', 'postalCode': '29341'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Wright Brothers National Memorial', 'states': 'NC', 'parkCode': 'wrbr', 'longitude': '-75.66997163', 'latitude': '36.01637713', 'postalCode': '27954'},
   {'fullname': 'Fort Union Trading Post National Historic Site', 'states': 'MT,ND', 'parkCode': 'fous', 'longitude': '-104.0375238', 'latitude': '48.00075828', 'postalCode': '58801'},
   {'fullname': 'Knife River Indian Villages National Historic Site', 'states': 'ND', 'parkCode': 'knri', 'longitude': '-101.3860533', 'latitude': '47.3540219', 'postalCode': '58571'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'North Country National Scenic Trail', 'states': 'MI,MN,ND,NY,OH,PA,VT,WI', 'parkCode': 'noco', 'longitude': '', 'latitude': '', 'postalCode': '49331'},
   {'fullname': 'Theodore Roosevelt National Park', 'states': 'ND', 'parkCode': 'thro', 'longitude': '-103.4300083', 'latitude': '47.17777274', 'postalCode': '58645'},
   {'fullname': 'American Memorial Park', 'states': 'MP', 'parkCode': 'amme', 'longitude': '145.7231096', 'latitude': '15.21680033', 'postalCode': '96950'},
   {'fullname': 'Charles Young Buffalo Soldiers National Monument', 'states': 'OH', 'parkCode': 'chyo', 'longitude': '-83.89328575', 'latitude': '39.70817829', 'postalCode': '45384'},
   {'fullname': 'Cuyahoga Valley National Park', 'states': 'OH', 'parkCode': 'cuva', 'longitude': '-81.57116722', 'latitude': '41.26093905', 'postalCode': '44141'},
   {'fullname': 'David Berger National Memorial', 'states': 'OH', 'parkCode': 'dabe', 'longitude': '-81.49133831', 'latitude': '41.47369879', 'postalCode': '44141'},
   {'fullname': 'Dayton Aviation Heritage National Historical Park', 'states': 'OH', 'parkCode': 'daav', 'longitude': '-84.10442045', 'latitude': '39.78944467', 'postalCode': '45402'},
   {'fullname': 'Fallen Timbers Battlefield and Fort Miamis National Historic Site', 'states': 'OH', 'parkCode': 'fati', 'longitude': '-83.6975021362305', 'latitude': '41.5441665649414', 'postalCode': '43537'},
   {'fullname': 'First Ladies National Historic Site', 'states': 'OH', 'parkCode': 'fila', 'longitude': '-81.37579869', 'latitude': '40.79689857', 'postalCode': '44702-2107'},
   {'fullname': 'Hopewell Culture National Historical Park', 'states': 'OH', 'parkCode': 'hocu', 'longitude': '-83.08049456', 'latitude': '39.31594374', 'postalCode': '45601'},
   {'fullname': 'James A Garfield National Historic Site', 'states': 'OH', 'parkCode': 'jaga', 'longitude': '-81.35086557', 'latitude': '41.66486549', 'postalCode': '44060'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'National Aviation Heritage Area', 'states': 'OH', 'parkCode': 'avia', 'longitude': '-84.0711364746094', 'latitude': '39.9818229675293', 'postalCode': '45402'},
   {'fullname': 'North Country National Scenic Trail', 'states': 'MI,MN,ND,NY,OH,PA,VT,WI', 'parkCode': 'noco', 'longitude': '', 'latitude': '', 'postalCode': '49331'},
   {'fullname': 'Perry\'s Victory & International Peace Memorial', 'states': 'OH', 'parkCode': 'pevi', 'longitude': '-82.8115794', 'latitude': '41.65449782', 'postalCode': '43456'},
   {'fullname': 'William Howard Taft National Historic Site', 'states': 'OH', 'parkCode': 'wiho', 'longitude': '-84.50758951', 'latitude': '39.11970352', 'postalCode': '45219'},
   {'fullname': 'Chickasaw National Recreation Area', 'states': 'OK', 'parkCode': 'chic', 'longitude': '-97.00715669', 'latitude': '34.46050507', 'postalCode': '73086'},
   {'fullname': 'Fort Smith National Historic Site', 'states': 'AR,OK', 'parkCode': 'fosm', 'longitude': '-94.43129079', 'latitude': '35.38834746', 'postalCode': '72901'},
   {'fullname': 'Oklahoma City National Memorial', 'states': 'OK', 'parkCode': 'okci', 'longitude': '-97.51709193', 'latitude': '35.47297978', 'postalCode': '73102-0676'},
   {'fullname': 'Santa Fe National Historic Trail', 'states': 'CO,KS,MO,NM,OK', 'parkCode': 'safe', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Washita Battlefield National Historic Site', 'states': 'OK', 'parkCode': 'waba', 'longitude': '-99.70445143', 'latitude': '35.62083963', 'postalCode': '73628'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Crater Lake National Park', 'states': 'OR', 'parkCode': 'crla', 'longitude': '-122.1338414', 'latitude': '42.94065854', 'postalCode': '97604'},
   {'fullname': 'Fort Vancouver National Historic Site', 'states': 'OR,WA', 'parkCode': 'fova', 'longitude': '-122.6617043', 'latitude': '45.62234841', 'postalCode': '98661'},
   {'fullname': 'Ice Age Floods National Geologic Trail', 'states': 'WA,OR,ID,MT', 'parkCode': 'iafl', 'longitude': '', 'latitude': '', 'postalCode': '99116'},
   {'fullname': 'John Day Fossil Beds National Monument', 'states': 'OR', 'parkCode': 'joda', 'longitude': '-119.8811491', 'latitude': '44.62566508', 'postalCode': '97848'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Lewis and Clark National Historical Park', 'states': 'OR,WA', 'parkCode': 'lewi', 'longitude': '-123.9638583', 'latitude': '46.21178735', 'postalCode': '97103'},
   {'fullname': 'Nez Perce National Historical Park', 'states': 'ID,MT,OR,WA', 'parkCode': 'nepe', 'longitude': '-115.8761258', 'latitude': '46.07019093', 'postalCode': '83540-9715'},
   {'fullname': 'Oregon Caves National Monument & Preserve', 'states': 'OR', 'parkCode': 'orca', 'longitude': '-123.4018586', 'latitude': '42.10319143', 'postalCode': '97523'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Allegheny Portage Railroad National Historic Site', 'states': 'PA', 'parkCode': 'alpo', 'longitude': '-78.57431622', 'latitude': '40.42977467', 'postalCode': '16641'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Captain John Smith Chesapeake National Historic Trail', 'states': 'VA,MD,DE,DC,PA,NY', 'parkCode': 'cajo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '23690'},
   {'fullname': 'Chesapeake Bay', 'states': 'DC,DE,MD,NY,PA,VA,WV', 'parkCode': 'cbpo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '21403'},
   {'fullname': 'Chesapeake Bay Gateways and Watertrails Network', 'states': 'DC,MD,NY,PA,VA,WV', 'parkCode': 'cbgn', 'longitude': '-76.2533569335938', 'latitude': '37.3221206665039', 'postalCode': '0'},
   {'fullname': 'Delaware & Lehigh National Heritage Corridor', 'states': 'PA', 'parkCode': 'dele', 'longitude': '-75.2365978807211', 'latitude': '40.6690786778927', 'postalCode': '18042'},
   {'fullname': 'Delaware Water Gap National Recreation Area', 'states': 'NJ,PA', 'parkCode': 'dewa', 'longitude': '-74.94751173', 'latitude': '41.12793491', 'postalCode': '18324'},
   {'fullname': 'Edgar Allan Poe National Historic Site', 'states': 'PA', 'parkCode': 'edal', 'longitude': '-75.1500062', 'latitude': '39.96195482', 'postalCode': '19106'},
   {'fullname': 'Eisenhower National Historic Site', 'states': 'PA', 'parkCode': 'eise', 'longitude': '-77.26508101', 'latitude': '39.79577592', 'postalCode': '17325'},
   {'fullname': 'First State National Historical Park', 'states': 'DE,PA', 'parkCode': 'frst', 'longitude': '-75.56353942', 'latitude': '39.83076929', 'postalCode': '19720'},
   {'fullname': 'Flight 93 National Memorial', 'states': 'PA', 'parkCode': 'flni', 'longitude': '-78.89456905', 'latitude': '40.06061476', 'postalCode': '15560'},
   {'fullname': 'Fort Necessity National Battlefield', 'states': 'PA', 'parkCode': 'fone', 'longitude': '-79.59033344', 'latitude': '39.81306048', 'postalCode': '15437'},
   {'fullname': 'Friendship Hill National Historic Site', 'states': 'PA', 'parkCode': 'frhi', 'longitude': '-79.92504169', 'latitude': '39.77543423', 'postalCode': '15437'},
   {'fullname': 'Gettysburg National Military Park', 'states': 'PA', 'parkCode': 'gett', 'longitude': '-77.23246758', 'latitude': '39.81557366', 'postalCode': '17325'},
   {'fullname': 'Gloria Dei Church National Historic Site', 'states': 'PA', 'parkCode': 'glde', 'longitude': '-75.14398924', 'latitude': '39.93435005', 'postalCode': '19147'},
   {'fullname': 'Hopewell Furnace National Historic Site', 'states': 'PA', 'parkCode': 'hofu', 'longitude': '-75.76766355', 'latitude': '40.20610637', 'postalCode': '19520'},
   {'fullname': 'Independence National Historical Park', 'states': 'PA', 'parkCode': 'inde', 'longitude': '-75.14794157', 'latitude': '39.94746112', 'postalCode': '19106'},
   {'fullname': 'Johnstown Flood National Memorial', 'states': 'PA', 'parkCode': 'jofl', 'longitude': '-78.77448601', 'latitude': '40.34584534', 'postalCode': '15956'},
   {'fullname': 'Journey Through Hallowed Ground National Heritage Area', 'states': 'MD,PA,WV,VA', 'parkCode': 'jthg', 'longitude': '-77.8056488037109', 'latitude': '38.8904075622559', 'postalCode': '20197'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Lower Delaware National Wild and Scenic River', 'states': 'PA,NJ', 'parkCode': 'lode', 'longitude': '', 'latitude': '', 'postalCode': '19106'},
   {'fullname': 'North Country National Scenic Trail', 'states': 'MI,MN,ND,NY,OH,PA,VT,WI', 'parkCode': 'noco', 'longitude': '', 'latitude': '', 'postalCode': '49331'},
   {'fullname': 'Oil Region National Heritage Area', 'states': 'PA', 'parkCode': 'oire', 'longitude': '-79.7526016235352', 'latitude': '41.4201164245605', 'postalCode': '16301'},
   {'fullname': 'Potomac Heritage National Scenic Trail', 'states': 'DC,MD,PA,VA', 'parkCode': 'pohe', 'longitude': '-77.5230108485372', 'latitude': '39.1506013340668', 'postalCode': '20242'},
   {'fullname': 'Rivers Of Steel National Heritage Area', 'states': 'PA', 'parkCode': 'rist', 'longitude': '-79.8619613647461', 'latitude': '40.2995758056641', 'postalCode': '15120'},
   {'fullname': 'Schuylkill River Valley National Heritage Area', 'states': 'PA', 'parkCode': 'scrv', 'longitude': '', 'latitude': '', 'postalCode': '19464'},
   {'fullname': 'Steamtown National Historic Site', 'states': 'PA', 'parkCode': 'stea', 'longitude': '-75.67037255', 'latitude': '41.40757521', 'postalCode': '18503-2018'},
   {'fullname': 'Thaddeus Kosciuszko National Memorial', 'states': 'PA', 'parkCode': 'thko', 'longitude': '-75.14732045', 'latitude': '39.94345312', 'postalCode': '19106'},
   {'fullname': 'Upper Delaware Scenic & Recreational River', 'states': 'NY,PA', 'parkCode': 'upde', 'longitude': '-75.03861562', 'latitude': '41.66172578', 'postalCode': '18405'},
   {'fullname': 'Valley Forge National Historical Park', 'states': 'PA', 'parkCode': 'vafo', 'longitude': '-75.44581889', 'latitude': '40.10054985', 'postalCode': '19406'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'San Juan National Historic Site', 'states': 'PR', 'parkCode': 'saju', 'longitude': '-66.11848623', 'latitude': '18.46873857', 'postalCode': '00901'},
   {'fullname': 'Blackstone River Valley National Historical Park', 'states': 'RI,MA', 'parkCode': 'blrv', 'longitude': '-71.6462543418673', 'latitude': '42.0985434981132', 'postalCode': '01588'},
   {'fullname': 'John H. Chafee Blackstone River Valley National Heritage Corridor', 'states': 'MA,RI', 'parkCode': 'blac', 'longitude': '-71.668818', 'latitude': '42.201158', 'postalCode': '01588'},
   {'fullname': 'Roger Williams National Memorial', 'states': 'RI', 'parkCode': 'rowi', 'longitude': '-71.41056665', 'latitude': '41.8298955', 'postalCode': '02903'},
   {'fullname': 'Touro Synagogue National Historic Site', 'states': 'RI', 'parkCode': 'tosy', 'longitude': '-71.31211638', 'latitude': '41.48928393', 'postalCode': '02840'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'Charles Pinckney National Historic Site', 'states': 'SC', 'parkCode': 'chpi', 'longitude': '-79.82487582', 'latitude': '32.84577392', 'postalCode': '29482'},
   {'fullname': 'Congaree National Park', 'states': 'SC', 'parkCode': 'cong', 'longitude': '-80.74867805', 'latitude': '33.79187523', 'postalCode': '29061'},
   {'fullname': 'Cowpens National Battlefield', 'states': 'SC', 'parkCode': 'cowp', 'longitude': '-81.80935433', 'latitude': '35.13160654', 'postalCode': '29341'},
   {'fullname': 'Fort Sumter and Fort Moultrie National Historical Park', 'states': 'SC', 'parkCode': 'fosu', 'longitude': '-79.87068744', 'latitude': '32.75654469', 'postalCode': '29401'},
   {'fullname': 'Gullah/Geechee Cultural Heritage Corridor', 'states': 'FL,GA,NC,SC', 'parkCode': 'guge', 'longitude': '-79.8232242465019', 'latitude': '32.8470785915852', 'postalCode': '29455'},
   {'fullname': 'Kings Mountain National Military Park', 'states': 'SC', 'parkCode': 'kimo', 'longitude': '-81.38978712', 'latitude': '35.13900723', 'postalCode': '29702'},
   {'fullname': 'Ninety Six National Historic Site', 'states': 'SC', 'parkCode': 'nisi', 'longitude': '-82.01636079', 'latitude': '34.14273587', 'postalCode': '29666'},
   {'fullname': 'Overmountain Victory National Historic Trail', 'states': 'NC,SC,TN,VA', 'parkCode': 'ovvi', 'longitude': '-81.377', 'latitude': '35.14044', 'postalCode': '29341'},
   {'fullname': 'Reconstruction Era National Historical Park', 'states': 'SC', 'parkCode': 'reer', 'longitude': '-80.6511077880859', 'latitude': '32.3868598937988', 'postalCode': '29902'},
   {'fullname': 'South Carolina National Heritage Corridor', 'states': 'SC', 'parkCode': 'soca', 'longitude': '-81.5836944580078', 'latitude': '33.684154510498', 'postalCode': '29627'},
   {'fullname': 'Badlands National Park', 'states': 'SD', 'parkCode': 'badl', 'longitude': '-102.482942', 'latitude': '43.68584846', 'postalCode': '57750'},
   {'fullname': 'Jewel Cave National Monument', 'states': 'SD', 'parkCode': 'jeca', 'longitude': '-103.829994', 'latitude': '43.73102945', 'postalCode': '57730'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Minuteman Missile National Historic Site', 'states': 'SD', 'parkCode': 'mimi', 'longitude': '-102.0272131', 'latitude': '43.89558013', 'postalCode': '57567'},
   {'fullname': 'Missouri National Recreational River', 'states': 'SD,NE', 'parkCode': 'mnrr', 'longitude': '-97.59077822', 'latitude': '42.7882189', 'postalCode': '57078'},
   {'fullname': 'Mount Rushmore National Memorial', 'states': 'SD', 'parkCode': 'moru', 'longitude': '-103.4525186', 'latitude': '43.88037021', 'postalCode': '57751'},
   {'fullname': 'Wind Cave National Park', 'states': 'SD', 'parkCode': 'wica', 'longitude': '-103.4394709', 'latitude': '43.58012365', 'postalCode': '57747'},
   {'fullname': 'Andrew Johnson National Historic Site', 'states': 'TN', 'parkCode': 'anjo', 'longitude': '-82.83709021', 'latitude': '36.15624509', 'postalCode': '37743'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Big South Fork National River & Recreation Area', 'states': 'KY,TN', 'parkCode': 'biso', 'longitude': '-84.66506688', 'latitude': '36.5348388', 'postalCode': '37841'},
   {'fullname': 'Chickamauga & Chattanooga National Military Park', 'states': 'GA,TN', 'parkCode': 'chch', 'longitude': '-85.28749537', 'latitude': '34.94317623', 'postalCode': '30742'},
   {'fullname': 'Cumberland Gap National Historical Park', 'states': 'KY,TN,VA', 'parkCode': 'cuga', 'longitude': '-83.6114083', 'latitude': '36.62503076', 'postalCode': '40965'},
   {'fullname': 'Fort Donelson National Battlefield', 'states': 'KY,TN', 'parkCode': 'fodo', 'longitude': '-87.92445695', 'latitude': '36.49019078', 'postalCode': '37058'},
   {'fullname': 'Great Smoky Mountains National Park', 'states': 'NC,TN', 'parkCode': 'grsm', 'longitude': '-83.50818326', 'latitude': '35.60116374', 'postalCode': '37738'},
   {'fullname': 'Manhattan Project National Historical Park', 'states': 'NM,WA,TN', 'parkCode': 'mapr', 'longitude': '-100.8429548', 'latitude': '39.76948167', 'postalCode': '80228'},
   {'fullname': 'Natchez Trace National Scenic Trail', 'states': 'AL,MS,TN', 'parkCode': 'natt', 'longitude': '-88.7100104093552', 'latitude': '34.3302903330188', 'postalCode': '38804'},
   {'fullname': 'Natchez Trace Parkway', 'states': 'AL,MS,TN', 'parkCode': 'natr', 'longitude': '-89.03092439', 'latitude': '33.78002293', 'postalCode': '38804'},
   {'fullname': 'Obed Wild & Scenic River', 'states': 'TN', 'parkCode': 'obed', 'longitude': '-84.5979170501232', 'latitude': '36.1056026036731', 'postalCode': '37887'},
   {'fullname': 'Overmountain Victory National Historic Trail', 'states': 'NC,SC,TN,VA', 'parkCode': 'ovvi', 'longitude': '-81.377', 'latitude': '35.14044', 'postalCode': '29341'},
   {'fullname': 'Shiloh National Military Park', 'states': 'TN,MS', 'parkCode': 'shil', 'longitude': '-88.3421072', 'latitude': '35.13850907', 'postalCode': '38376'},
   {'fullname': 'Stones River National Battlefield', 'states': 'TN', 'parkCode': 'stri', 'longitude': '-86.43078399', 'latitude': '35.87608652', 'postalCode': '37129'},
   {'fullname': 'Tennessee Civil War National Heritage Area', 'states': 'TN', 'parkCode': 'tecw', 'longitude': '-86.3433303833008', 'latitude': '35.8429870605469', 'postalCode': '37132'},
   {'fullname': 'Trail Of Tears National Historic Trail', 'states': 'AL,AR,GA,IL,KY,MO,NC,OK,TN', 'parkCode': 'trte', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Alibates Flint Quarries National Monument', 'states': 'TX', 'parkCode': 'alfl', 'longitude': '-101.6717008', 'latitude': '35.5819662', 'postalCode': '79036'},
   {'fullname': 'Amistad National Recreation Area', 'states': 'TX', 'parkCode': 'amis', 'longitude': '-101.075821', 'latitude': '29.53539777', 'postalCode': '78840'},
   {'fullname': 'Big Bend National Park', 'states': 'TX', 'parkCode': 'bibe', 'longitude': '-103.2297897', 'latitude': '29.29817767', 'postalCode': '79834'},
   {'fullname': 'Big Thicket National Preserve', 'states': 'TX', 'parkCode': 'bith', 'longitude': '-94.3384557', 'latitude': '30.42356654', 'postalCode': '77625'},
   {'fullname': 'Chamizal National Memorial', 'states': 'TX', 'parkCode': 'cham', 'longitude': '-106.4544011', 'latitude': '31.76729634', 'postalCode': '79905'},
   {'fullname': 'El Camino Real de los Tejas National Historic Trail', 'states': 'TX,LA', 'parkCode': 'elte', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'El Camino Real de Tierra Adentro National Historic Trail', 'states': 'NM,TX', 'parkCode': 'elca', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Fort Davis National Historic Site', 'states': 'TX', 'parkCode': 'foda', 'longitude': '-103.8961904', 'latitude': '30.59930381', 'postalCode': '79734'},
   {'fullname': 'Guadalupe Mountains National Park', 'states': 'TX', 'parkCode': 'gumo', 'longitude': '-104.885527', 'latitude': '31.92304462', 'postalCode': '79847'},
   {'fullname': 'Lake Meredith National Recreation Area', 'states': 'TX', 'parkCode': 'lamr', 'longitude': '-101.6820066', 'latitude': '35.61926203', 'postalCode': '79036'},
   {'fullname': 'Lyndon B Johnson National Historical Park', 'states': 'TX', 'parkCode': 'lyjo', 'longitude': '-98.60692433', 'latitude': '30.2519655', 'postalCode': '78636'},
   {'fullname': 'Padre Island National Seashore', 'states': 'TX', 'parkCode': 'pais', 'longitude': '-97.35901135', 'latitude': '27.05381186', 'postalCode': '78480'},
   {'fullname': 'Palo Alto Battlefield National Historical Park', 'states': 'TX', 'parkCode': 'paal', 'longitude': '-97.46296072', 'latitude': '26.02387351', 'postalCode': '78520'},
   {'fullname': 'Rio Grande Wild & Scenic River', 'states': 'TX', 'parkCode': 'rigr', 'longitude': '-102.5979169', 'latitude': '29.52743158', 'postalCode': '79834'},
   {'fullname': 'San Antonio Missions National Historical Park', 'states': 'TX', 'parkCode': 'saan', 'longitude': '-98.4289522', 'latitude': '29.31262089', 'postalCode': '78214'},
   {'fullname': 'Waco Mammoth National Monument', 'states': 'TX', 'parkCode': 'waco', 'longitude': '-97.17606143', 'latitude': '31.60465887', 'postalCode': '76708'},
   {'fullname': 'Arches National Park', 'states': 'UT', 'parkCode': 'arch', 'longitude': '-109.5863666', 'latitude': '38.72261844', 'postalCode': '84532'},
   {'fullname': 'Bryce Canyon National Park', 'states': 'UT', 'parkCode': 'brca', 'longitude': '-112.1826689', 'latitude': '37.58399144', 'postalCode': '84764'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Canyonlands National Park', 'states': 'UT', 'parkCode': 'cany', 'longitude': '-109.8801624', 'latitude': '38.24555783', 'postalCode': '84532'},
   {'fullname': 'Capitol Reef National Park', 'states': 'UT', 'parkCode': 'care', 'longitude': '-111.247048377991', 'latitude': '38.2821653130533', 'postalCode': '84775'},
   {'fullname': 'Cedar Breaks National Monument', 'states': 'UT', 'parkCode': 'cebr', 'longitude': '-112.845268', 'latitude': '37.63545562', 'postalCode': '84720'},
   {'fullname': 'Dinosaur National Monument', 'states': 'CO,UT', 'parkCode': 'dino', 'longitude': '-108.9333714', 'latitude': '40.50739742', 'postalCode': '81610'},
   {'fullname': 'Glen Canyon National Recreation Area', 'states': 'AZ,UT', 'parkCode': 'glca', 'longitude': '-110.7718311', 'latitude': '37.51841301', 'postalCode': '86040'},
   {'fullname': 'Golden Spike National Historical Park', 'states': 'UT', 'parkCode': 'gosp', 'longitude': '-112.5242653', 'latitude': '41.61947508', 'postalCode': '84302'},
   {'fullname': 'Hovenweep National Monument', 'states': 'CO,UT', 'parkCode': 'hove', 'longitude': '-109.0047977', 'latitude': '37.39134092', 'postalCode': '81321'},
   {'fullname': 'Mormon Pioneer National Historic Trail', 'states': 'IL,IA,NE,UT,WY', 'parkCode': 'mopi', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Natural Bridges National Monument', 'states': 'UT', 'parkCode': 'nabr', 'longitude': '-110.0022436', 'latitude': '37.6045329', 'postalCode': '84533'},
   {'fullname': 'Old Spanish National Historic Trail', 'states': 'AZ,CA,CO,NV,NM,UT', 'parkCode': 'olsp', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Rainbow Bridge National Monument', 'states': 'UT', 'parkCode': 'rabr', 'longitude': '-110.9655099', 'latitude': '37.07788771', 'postalCode': '00000'},
   {'fullname': 'Timpanogos Cave National Monument', 'states': 'UT', 'parkCode': 'tica', 'longitude': '-111.7093944', 'latitude': '40.44039719', 'postalCode': '84003'},
   {'fullname': 'Zion National Park', 'states': 'UT', 'parkCode': 'zion', 'longitude': '-113.0265138', 'latitude': '37.29839254', 'postalCode': '84767'},
   {'fullname': 'Arches National Park', 'states': 'UT', 'parkCode': 'arch', 'longitude': '-109.5863666', 'latitude': '38.72261844', 'postalCode': '84532'},
   {'fullname': 'Bryce Canyon National Park', 'states': 'UT', 'parkCode': 'brca', 'longitude': '-112.1826689', 'latitude': '37.58399144', 'postalCode': '84764'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Canyonlands National Park', 'states': 'UT', 'parkCode': 'cany', 'longitude': '-109.8801624', 'latitude': '38.24555783', 'postalCode': '84532'},
   {'fullname': 'Capitol Reef National Park', 'states': 'UT', 'parkCode': 'care', 'longitude': '-111.247048377991', 'latitude': '38.2821653130533', 'postalCode': '84775'},
   {'fullname': 'Cedar Breaks National Monument', 'states': 'UT', 'parkCode': 'cebr', 'longitude': '-112.845268', 'latitude': '37.63545562', 'postalCode': '84720'},
   {'fullname': 'Dinosaur National Monument', 'states': 'CO,UT', 'parkCode': 'dino', 'longitude': '-108.9333714', 'latitude': '40.50739742', 'postalCode': '81610'},
   {'fullname': 'Glen Canyon National Recreation Area', 'states': 'AZ,UT', 'parkCode': 'glca', 'longitude': '-110.7718311', 'latitude': '37.51841301', 'postalCode': '86040'},
   {'fullname': 'Golden Spike National Historical Park', 'states': 'UT', 'parkCode': 'gosp', 'longitude': '-112.5242653', 'latitude': '41.61947508', 'postalCode': '84302'},
   {'fullname': 'Hovenweep National Monument', 'states': 'CO,UT', 'parkCode': 'hove', 'longitude': '-109.0047977', 'latitude': '37.39134092', 'postalCode': '81321'},
   {'fullname': 'Mormon Pioneer National Historic Trail', 'states': 'IL,IA,NE,UT,WY', 'parkCode': 'mopi', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Natural Bridges National Monument', 'states': 'UT', 'parkCode': 'nabr', 'longitude': '-110.0022436', 'latitude': '37.6045329', 'postalCode': '84533'},
   {'fullname': 'Old Spanish National Historic Trail', 'states': 'AZ,CA,CO,NV,NM,UT', 'parkCode': 'olsp', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Rainbow Bridge National Monument', 'states': 'UT', 'parkCode': 'rabr', 'longitude': '-110.9655099', 'latitude': '37.07788771', 'postalCode': '00000'},
   {'fullname': 'Timpanogos Cave National Monument', 'states': 'UT', 'parkCode': 'tica', 'longitude': '-111.7093944', 'latitude': '40.44039719', 'postalCode': '84003'},
   {'fullname': 'Zion National Park', 'states': 'UT', 'parkCode': 'zion', 'longitude': '-113.0265138', 'latitude': '37.29839254', 'postalCode': '84767'},
   {'fullname': 'Appalachian National Scenic Trail', 'states': 'CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV', 'parkCode': 'appa', 'longitude': '-76.4337548', 'latitude': '40.41029575', 'postalCode': '25425'},
   {'fullname': 'Appomattox Court House National Historical Park', 'states': 'VA', 'parkCode': 'apco', 'longitude': '-78.79856982', 'latitude': '37.38022164', 'postalCode': '24522'},
   {'fullname': 'Arlington House, The Robert  E. Lee Memorial', 'states': 'VA', 'parkCode': 'arho', 'longitude': '-77.0734786987305', 'latitude': '38.8822021484375', 'postalCode': '22101'},
   {'fullname': 'Assateague Island National Seashore', 'states': 'MD,VA', 'parkCode': 'asis', 'longitude': '-75.24524611', 'latitude': '38.05593172', 'postalCode': '21811'},
   {'fullname': 'Blue Ridge Parkway', 'states': 'NC,VA', 'parkCode': 'blri', 'longitude': '-81.0420999', 'latitude': '36.53386746', 'postalCode': '28803'},
   {'fullname': 'Booker T Washington National Monument', 'states': 'VA', 'parkCode': 'bowa', 'longitude': '-79.73185833', 'latitude': '37.11520539', 'postalCode': '24101'},
   {'fullname': 'Cape Henry Memorial Part of Colonial National Historical Park', 'states': 'VA', 'parkCode': 'came', 'longitude': '-76.0083312988', 'latitude': '36.9280548096', 'postalCode': '23690'},
   {'fullname': 'Captain John Smith Chesapeake National Historic Trail', 'states': 'VA,MD,DE,DC,PA,NY', 'parkCode': 'cajo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '23690'},
   {'fullname': 'Cedar Creek & Belle Grove National Historical Park', 'states': 'VA', 'parkCode': 'cebe', 'longitude': '-78.30618934', 'latitude': '39.0093576', 'postalCode': '22645'},
   {'fullname': 'Chesapeake Bay', 'states': 'DC,DE,MD,NY,PA,VA,WV', 'parkCode': 'cbpo', 'longitude': '-76.483355', 'latitude': '38.971601', 'postalCode': '21403'},
   {'fullname': 'Chesapeake Bay Gateways and Watertrails Network', 'states': 'DC,MD,NY,PA,VA,WV', 'parkCode': 'cbgn', 'longitude': '-76.2533569335938', 'latitude': '37.3221206665039', 'postalCode': '0'},
   {'fullname': 'Civil War Defenses of Washington', 'states': 'DC,MD,VA', 'parkCode': 'cwdw', 'longitude': '-77.04998374', 'latitude': '38.93596206', 'postalCode': '20008'},
   {'fullname': 'Colonial National Historical Park', 'states': 'VA', 'parkCode': 'colo', 'longitude': '-76.61998123', 'latitude': '37.22824435', 'postalCode': '23690'},
   {'fullname': 'Cumberland Gap National Historical Park', 'states': 'KY,TN,VA', 'parkCode': 'cuga', 'longitude': '-83.6114083', 'latitude': '36.62503076', 'postalCode': '40965'},
   {'fullname': 'Fort Monroe National Monument', 'states': 'VA', 'parkCode': 'fomr', 'longitude': '-76.30103195', 'latitude': '37.01733343', 'postalCode': '23651-1001'},
   {'fullname': 'Fredericksburg & Spotsylvania National Military Park', 'states': 'VA', 'parkCode': 'frsp', 'longitude': '-77.6470428', 'latitude': '38.28277118', 'postalCode': '22405'},
   {'fullname': 'George Washington Birthplace National Monument', 'states': 'VA', 'parkCode': 'gewa', 'longitude': '-76.92079458', 'latitude': '38.19362603', 'postalCode': '22443'},
   {'fullname': 'George Washington Memorial Parkway', 'states': 'DC,MD,VA', 'parkCode': 'gwmp', 'longitude': '-77.08528147', 'latitude': '38.85452263', 'postalCode': '22101'},
   {'fullname': 'Great Falls Park', 'states': 'VA', 'parkCode': 'grfa', 'longitude': '-77.25128326', 'latitude': '38.98776107', 'postalCode': '22101'},
   {'fullname': 'Green Springs', 'states': 'VA', 'parkCode': 'grsp', 'longitude': '-78.16540204', 'latitude': '38.02745704', 'postalCode': '23093'},
   {'fullname': 'Harpers Ferry National Historical Park', 'states': 'WV,VA,MD', 'parkCode': 'hafe', 'longitude': '-77.74088546', 'latitude': '39.31865949', 'postalCode': '25425'},
   {'fullname': 'Historic Jamestowne Part of Colonial National Historical Park', 'states': 'VA', 'parkCode': 'jame', 'longitude': '-76.75469561', 'latitude': '37.20027185', 'postalCode': '23081'},
   {'fullname': 'Journey Through Hallowed Ground National Heritage Area', 'states': 'MD,PA,WV,VA', 'parkCode': 'jthg', 'longitude': '-77.8056488037109', 'latitude': '38.8904075622559', 'postalCode': '20197'},
   {'fullname': 'Maggie L Walker National Historic Site', 'states': 'VA', 'parkCode': 'mawa', 'longitude': '-77.43746979', 'latitude': '37.54781499', 'postalCode': '23219'},
   {'fullname': 'Manassas National Battlefield Park', 'states': 'VA', 'parkCode': 'mana', 'longitude': '-77.5353468', 'latitude': '38.81710063', 'postalCode': '20109'},
   {'fullname': 'Overmountain Victory National Historic Trail', 'states': 'NC,SC,TN,VA', 'parkCode': 'ovvi', 'longitude': '-81.377', 'latitude': '35.14044', 'postalCode': '29341'},
   {'fullname': 'Petersburg National Battlefield', 'states': 'VA', 'parkCode': 'pete', 'longitude': '-77.47594865', 'latitude': '37.19109957', 'postalCode': '23803'},
   {'fullname': 'Potomac Heritage National Scenic Trail', 'states': 'DC,MD,PA,VA', 'parkCode': 'pohe', 'longitude': '-77.5230108485372', 'latitude': '39.1506013340668', 'postalCode': '20242'},
   {'fullname': 'Prince William Forest Park', 'states': 'VA', 'parkCode': 'prwi', 'longitude': '-77.38910997', 'latitude': '38.58589108', 'postalCode': '22172'},
   {'fullname': 'Richmond National Battlefield Park', 'states': 'VA', 'parkCode': 'rich', 'longitude': '-77.29107785', 'latitude': '37.48774472', 'postalCode': '23223'},
   {'fullname': 'Shenandoah National Park', 'states': 'VA', 'parkCode': 'shen', 'longitude': '-78.46907715', 'latitude': '38.49236644', 'postalCode': '22835'},
   {'fullname': 'Shenandoah Valley Battlefields National Historic District', 'states': 'VA', 'parkCode': 'shvb', 'longitude': '-78.7985458374023', 'latitude': '38.5846176147461', 'postalCode': '22844'},
   {'fullname': 'Star-Spangled Banner National Historic Trail', 'states': 'MD,VA,DC', 'parkCode': 'stsp', 'longitude': '-76.6034317017', 'latitude': '39.2872505188', 'postalCode': '21230'},
   {'fullname': 'Washington-Rochambeau Revolutionary Route National Historic Trail', 'states': 'MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC', 'parkCode': 'waro', 'longitude': '', 'latitude': '', 'postalCode': '19406'},
   {'fullname': 'Wolf Trap National Park for the Performing Arts', 'states': 'VA', 'parkCode': 'wotr', 'longitude': '-77.265089', 'latitude': '38.93854526', 'postalCode': '22182-1643'},
   {'fullname': 'Yorktown Battlefield Part of Colonial National Historical Park', 'states': 'VA', 'parkCode': 'york', 'longitude': '-76.29900672', 'latitude': '37.38623205', 'postalCode': '23690'},
   {'fullname': 'Buck Island Reef National Monument', 'states': 'VI', 'parkCode': 'buis', 'longitude': '-64.6222179', 'latitude': '17.81026717', 'postalCode': '00820'},
   {'fullname': 'Christiansted National Historic Site', 'states': 'VI', 'parkCode': 'chri', 'longitude': '-64.72906227', 'latitude': '17.73771903', 'postalCode': '00820'},
   {'fullname': 'Salt River Bay National Historical Park and Ecological Preserve', 'states': 'VI', 'parkCode': 'sari', 'longitude': '-64.75519348', 'latitude': '17.77908602', 'postalCode': '00820'},
   {'fullname': 'Virgin Islands Coral Reef National Monument', 'states': 'VI', 'parkCode': 'vicr', 'longitude': '-64.70683395', 'latitude': '18.28996918', 'postalCode': '00830'},
   {'fullname': 'Virgin Islands National Park', 'states': 'VI', 'parkCode': 'viis', 'longitude': '-64.74194451', 'latitude': '18.34279656', 'postalCode': '00830'},
   {'fullname': 'Ebey\'s Landing National Historical Reserve', 'states': 'WA', 'parkCode': 'ebla', 'longitude': '-122.6877213', 'latitude': '48.21403036', 'postalCode': '98239'},
   {'fullname': 'Fort Vancouver National Historic Site', 'states': 'OR,WA', 'parkCode': 'fova', 'longitude': '-122.6617043', 'latitude': '45.62234841', 'postalCode': '98661'},
   {'fullname': 'Ice Age Floods National Geologic Trail', 'states': 'WA,OR,ID,MT', 'parkCode': 'iafl', 'longitude': '', 'latitude': '', 'postalCode': '99116'},
   {'fullname': 'Klondike Gold Rush - Seattle Unit National Historical Park', 'states': 'WA', 'parkCode': 'klse', 'longitude': '-122.3319664', 'latitude': '47.5993663', 'postalCode': '98104'},
   {'fullname': 'Lake Roosevelt National Recreation Area', 'states': 'WA', 'parkCode': 'laro', 'longitude': '-118.3513713', 'latitude': '48.17148735', 'postalCode': '99116'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Lewis and Clark National Historical Park', 'states': 'OR,WA', 'parkCode': 'lewi', 'longitude': '-123.9638583', 'latitude': '46.21178735', 'postalCode': '97103'},
   {'fullname': 'Manhattan Project National Historical Park', 'states': 'NM,WA,TN', 'parkCode': 'mapr', 'longitude': '-100.8429548', 'latitude': '39.76948167', 'postalCode': '80228'},
   {'fullname': 'Minidoka National Historic Site', 'states': 'ID,WA', 'parkCode': 'miin', 'longitude': '-114.4449868', 'latitude': '42.80586068', 'postalCode': '83332'},
   {'fullname': 'Mount Rainier National Park', 'states': 'WA', 'parkCode': 'mora', 'longitude': '-121.7043885', 'latitude': '46.86075416', 'postalCode': '98304'},
   {'fullname': 'Nez Perce National Historical Park', 'states': 'ID,MT,OR,WA', 'parkCode': 'nepe', 'longitude': '-115.8761258', 'latitude': '46.07019093', 'postalCode': '83540-9715'},
   {'fullname': 'North Cascades National Park', 'states': 'WA', 'parkCode': 'noca', 'longitude': '-121.2069423', 'latitude': '48.71171756', 'postalCode': '98284'},
   {'fullname': 'Olympic National Park', 'states': 'WA', 'parkCode': 'olym', 'longitude': '-123.6663848', 'latitude': '47.80392754', 'postalCode': '98362'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'San Juan Island National Historical Park', 'states': 'WA', 'parkCode': 'sajh', 'longitude': '-123.0610277', 'latitude': '48.51241933', 'postalCode': '98250'},
   {'fullname': 'Whitman Mission National Historic Site', 'states': 'WA', 'parkCode': 'whmi', 'longitude': '-118.4629388', 'latitude': '46.04119286', 'postalCode': '99362'},
   {'fullname': 'Wing Luke Museum Affiliated Area', 'states': 'WA', 'parkCode': 'wing', 'longitude': '', 'latitude': '', 'postalCode': '98104'},
   {'fullname': 'Ebey\'s Landing National Historical Reserve', 'states': 'WA', 'parkCode': 'ebla', 'longitude': '-122.6877213', 'latitude': '48.21403036', 'postalCode': '98239'},
   {'fullname': 'Fort Vancouver National Historic Site', 'states': 'OR,WA', 'parkCode': 'fova', 'longitude': '-122.6617043', 'latitude': '45.62234841', 'postalCode': '98661'},
   {'fullname': 'Ice Age Floods National Geologic Trail', 'states': 'WA,OR,ID,MT', 'parkCode': 'iafl', 'longitude': '', 'latitude': '', 'postalCode': '99116'},
   {'fullname': 'Klondike Gold Rush - Seattle Unit National Historical Park', 'states': 'WA', 'parkCode': 'klse', 'longitude': '-122.3319664', 'latitude': '47.5993663', 'postalCode': '98104'},
   {'fullname': 'Lake Roosevelt National Recreation Area', 'states': 'WA', 'parkCode': 'laro', 'longitude': '-118.3513713', 'latitude': '48.17148735', 'postalCode': '99116'},
   {'fullname': 'Lewis & Clark National Historic Trail', 'states': 'IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV', 'parkCode': 'lecl', 'longitude': '-95.9245147705078', 'latitude': '41.2646141052246', 'postalCode': '68102'},
   {'fullname': 'Lewis and Clark National Historical Park', 'states': 'OR,WA', 'parkCode': 'lewi', 'longitude': '-123.9638583', 'latitude': '46.21178735', 'postalCode': '97103'},
   {'fullname': 'Manhattan Project National Historical Park', 'states': 'NM,WA,TN', 'parkCode': 'mapr', 'longitude': '-100.8429548', 'latitude': '39.76948167', 'postalCode': '80228'},
   {'fullname': 'Minidoka National Historic Site', 'states': 'ID,WA', 'parkCode': 'miin', 'longitude': '-114.4449868', 'latitude': '42.80586068', 'postalCode': '83332'},
   {'fullname': 'Mount Rainier National Park', 'states': 'WA', 'parkCode': 'mora', 'longitude': '-121.7043885', 'latitude': '46.86075416', 'postalCode': '98304'},
   {'fullname': 'Nez Perce National Historical Park', 'states': 'ID,MT,OR,WA', 'parkCode': 'nepe', 'longitude': '-115.8761258', 'latitude': '46.07019093', 'postalCode': '83540-9715'},
   {'fullname': 'North Cascades National Park', 'states': 'WA', 'parkCode': 'noca', 'longitude': '-121.2069423', 'latitude': '48.71171756', 'postalCode': '98284'},
   {'fullname': 'Olympic National Park', 'states': 'WA', 'parkCode': 'olym', 'longitude': '-123.6663848', 'latitude': '47.80392754', 'postalCode': '98362'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'San Juan Island National Historical Park', 'states': 'WA', 'parkCode': 'sajh', 'longitude': '-123.0610277', 'latitude': '48.51241933', 'postalCode': '98250'},
   {'fullname': 'Whitman Mission National Historic Site', 'states': 'WA', 'parkCode': 'whmi', 'longitude': '-118.4629388', 'latitude': '46.04119286', 'postalCode': '99362'},
   {'fullname': 'Wing Luke Museum Affiliated Area', 'states': 'WA', 'parkCode': 'wing', 'longitude': '', 'latitude': '', 'postalCode': '98104'},
   {'fullname': 'Apostle Islands National Lakeshore', 'states': 'WI', 'parkCode': 'apis', 'longitude': '-90.66045665', 'latitude': '46.96240467', 'postalCode': '54814'},
   {'fullname': 'Ice Age National Scenic Trail', 'states': 'WI', 'parkCode': 'iatr', 'longitude': '', 'latitude': '', 'postalCode': '53711'},
   {'fullname': 'North Country National Scenic Trail', 'states': 'MI,MN,ND,NY,OH,PA,VT,WI', 'parkCode': 'noco', 'longitude': '', 'latitude': '', 'postalCode': '49331'},
   {'fullname': 'Saint Croix National Scenic Riverway', 'states': 'WI,MN', 'parkCode': 'sacn', 'longitude': '-92.36126685', 'latitude': '45.70019235', 'postalCode': '54024'},
   {'fullname': 'Bighorn Canyon National Recreation Area', 'states': 'MT,WY', 'parkCode': 'bica', 'longitude': '-108.1443943', 'latitude': '45.13154227', 'postalCode': '82435'},
   {'fullname': 'California National Historic Trail', 'states': 'CA,CO,ID,KS,MO,NE,NV,OR,UT,WY', 'parkCode': 'cali', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Devils Tower National Monument', 'states': 'WY', 'parkCode': 'deto', 'longitude': '-104.7156341', 'latitude': '44.59064655', 'postalCode': '82714'},
   {'fullname': 'Fort Laramie National Historic Site', 'states': 'WY', 'parkCode': 'fola', 'longitude': '-104.5459112', 'latitude': '42.20301694', 'postalCode': '82212'},
   {'fullname': 'Fossil Butte National Monument', 'states': 'WY', 'parkCode': 'fobu', 'longitude': '-110.7624754', 'latitude': '41.85635223', 'postalCode': '83101'},
   {'fullname': 'Grand Teton National Park', 'states': 'WY', 'parkCode': 'grte', 'longitude': '-110.7054666', 'latitude': '43.81853565', 'postalCode': '83012'},
   {'fullname': 'Mormon Pioneer National Historic Trail', 'states': 'IL,IA,NE,UT,WY', 'parkCode': 'mopi', 'longitude': '', 'latitude': '', 'postalCode': '87504'},
   {'fullname': 'Oregon National Historic Trail', 'states': 'ID,KS,MO,NE,OR,WA,WY', 'parkCode': 'oreg', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Pony Express National Historic Trail', 'states': 'CA,CO,KS,MO,NE,NV,UT,WY', 'parkCode': 'poex', 'longitude': '', 'latitude': '', 'postalCode': '87501'},
   {'fullname': 'Yellowstone National Park', 'states': 'ID,MT,WY', 'parkCode': 'yell', 'longitude': '-110.5471695', 'latitude': '44.59824417', 'postalCode': '82190'},
]

var searchHistory = [];

var storeHistory = function(parkName, parkC){
   var x = false; // variable that will allow me to test if the parkCode exists
   searchHistory = JSON.parse(localStorage.getItem("searches"));
   
   
      //limit array to two its.  
      var newobject ={Name: parkName, code: parkC};
      if (searchHistory== null){
         searchHistory =[];
         searchHistory.push(newobject);
      }else{
         const found = searchHistory.some(el => el.code === parkC);
         if (!found) {
         searchHistory.push(newobject);
         }
      }
      if (searchHistory.length>=3){
         searchHistory.shift();
      }
      localStorage.setItem('searches',JSON.stringify(searchHistory));




/*   
   //console.log(newobject);

*/
}

// pull the information of last two searches from localStorage
var getHistory = function(){
   searchHistory = JSON.parse(localStorage.getItem("searches"));
   if (searchHistory== null){
      searchHistory =[];
   }

   // if there is any data in the searchHistory array, display it
   if (searchHistory.length > 0) {

      for (var i = searchHistory.length - 1; i >= 0; i--) {
         var histLI = document.createElement("li");
         histLI.id = "histItem" + [i];
         subMenu.append(histLI);
         var aHist = document.createElement("a");
         aHist.classList = "rounded";
         aHist.style = "text-decoration: none;"
         aHist.innerHTML = searchHistory[i].Name;
         aHist.setAttribute("onClick", "getPark('" + searchHistory[i].code + "');");
         subMenu.append(aHist);
      }
   }
}

// function to get the fullname and parkcode
var getFullNameParkCode = function() {
   for (var i = 0; i < parkList.length; i++) {
      console.log(parkList[i].fullname + " = " + parkList[i].parkCode);
   }
}

// This allows me to get unique values in an array of multiple copies
const distinct = (value, index, self) => {
   return self.indexOf(value) === index;
}

// run this in the beginning to populate the states from the parkList array
var getStates = function() {
   getHistory();
   var theArray = [];
   for (var i = 0; i < parkList.length; i++) {
      if (parkList[i].states.length < 3) {
         theArray.push(parkList[i].states);
      }
   }
   var theStates = theArray.filter(distinct);
   theStates = theStates.sort();

   var divRow = document.createElement("div");
   divRow.classList = "row align-justify";
   stateRadio.append(divRow);
   var btnGroup = document.createElement("div");
   btnGroup.classList = "button-group expanded";
   divRow.append(btnGroup);
   for (var i = 0; i < theStates.length; i++)
   {
      if ((i + 1) % 6 === 0) {
         var btnGroup = document.createElement("div");
         btnGroup.classList = "button-group expanded";
         divRow.append(btnGroup);
      }
      var newLink = document.createElement("a");
      newLink.classList = "button";
      newLink.innerHTML = theStates[i];
      newLink.setAttribute("onClick", "pullParksByState('" + theStates[i] + "')");
      btnGroup.append(newLink);
   }
}

var pullParksByState = function(state) {
   // trigger the modals to take appropriate actions
   $('#state-modal').foundation('close');
   $('#park-modal').foundation('open');
   // clear the list of parks from the secondary modal
   removeDiv(document.getElementById("parks"));
   var theState = state;
   var theList = [];
   for (var i = 0; i < parkList.length; i++) {
      // check to see if the state exists in the list of states for big parks
      if (parkList[i].states.indexOf(theState) != -1) {
         // create an asterisk delimited array to hold the fullname and parkCode
         theList.push(parkList[i].fullname + "*" + parkList[i].parkCode);
      }
   }
   // filter the parks by just that state and only return unique values
   var theParks = theList.filter(distinct);

   // since the parks could be out of order, go ahead and sort them by the full name
   theParks = theParks.sort();

   var divParks = document.createElement("div");
   divParks.id = "parks";
   parkModal.append(divParks);

   var divParkList = document.createElement("div");
   divParkList.setAttribute("id", "parkList");
   divParks.append(divParkList);
   // go through the list of parks and set up the buttons
   for (var i = 0; i < theParks.length; i++) {
      var splitParks = theParks[i].split("*");
      
      var theButton = document.createElement("input");
      theButton.setAttribute("type", "button");
      theButton.setAttribute("name", splitParks[1]);
      theButton.setAttribute("value", splitParks[0]);
      theButton.setAttribute("onClick", "getPark('" + splitParks[1] + "');");
      theButton.innerHTML = splitParks[0];
      //storeHistory(splitParks[0], splitParks[1]);  -- moved this line to getParks in script.js ~line 257
      theButton.classList = "button small expanded ";
      divParkList.append(theButton);
      //var theBreak = document.createElement("br");
      //divParkList.append(theBreak);
      
   }

}

//  create a search function to loop through the array to pull back the park object
var search = function(parkKey, parkList) {
   for (var i = 0; i < parkList.length; i++) {
      if (parkList[i].parkCode === parkKey) {
         return parkList[i];
      }
   }
}

// function to check to see if the lat/lon exists on our local file
var checkLatLon = function(parkCode) {
   var thePark = search(parkCode, parkList);
   var theLat = thePark.latitude;
   var theLon = thePark.longitude;
   var theZip = thePark.postalCode;

   if (theLat === "" || theLon === "") {
      fetchLatLon(theZip);
   } else {
      fetchWeather(theLat, theLon);
   }
}

// this clears the id = parkList on the HTML page
var clearCurrent = function(div) {
   $(div).empty();
 }

 var removeDiv = function(myobj) {
   if (myobj !== null) {
      myobj.remove();
   }
 }


getStates();