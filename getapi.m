% Import data from Web Server
url = "http://128.199.158.8:12123/api/sensors";
restopt = weboptions('Timeout',20)
raw = webread(url,restopt);
datatable = struct2table(raw);



% Change formatted of Date/Time
datatable.timestamp = strrep(datatable.timestamp,'T',' ');
datatable.timestamp = split(datatable.timestamp, '.');
datatable.timestamp = datetime(datatable.timestamp(:,1));

% Change id's string to number
% ---

%{
Create Sensor and Detail List
sensorList = ["forest","road","cave","waterfall"];
minValue = [1.0,1.0,1.0,1.0];
maxValue = [2.0,2.0,2.0,2.0];
%}

save('data.mat','datatable')

%{
% Pre-Processing
i = 0;

while i < length(sensorList)
    i = i + 1;
    
    % Grouping Sensor Data
    sensorSelected = ismember(data.tag, sensorList(i)) & (data.value >= minValue(i) & data.value < maxValue(i) & data.timestamp >= datetime(2018,01,01) & data.timestamp < datetime(2018,01,02));
    dataSelected = data.value(sensorSelected);
    timeSelected = data.timestamp(sensorSelected);
    
    % Collect in Cell Array
    dataGroup{1,i} = sensorList(i);
    dataGroup{2,i} = dataSelected;
    dataGroup{3,i} = timeSelected;
    dataGroup{4,i} = cellstr(timeSelected);
end
%}
%save('dataGroup.mat','dataGroup')




