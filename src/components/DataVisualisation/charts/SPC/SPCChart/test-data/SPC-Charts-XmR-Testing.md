This document lists a range of checks to ensure any locally-made XmR SPC
chart produces the same output as the [Single Chart Tool](https://future.nhs.uk/MDC/view?objectId=115464677) v5.0 created by the Making Data Count team.

Unless specified, the improvement direction in all examples is set to high is good with the points for significance for the shift and trend
special cause rules set to 6.

Subscript notation is used to refer to specific points on the chart (e.g. p~1~ refers to the first point).

------------------------------------------------------------------------

------------------------------------------------------------------------

# **Contents** {#contents .TOC-Heading}

[Number of points [2](#number-of-points)](#number-of-points)

[Process limits [2](#process-limits)](#process-limits)

[Special cause [3](#special-cause)](#special-cause)

[Special cause -- single point
[4](#special-cause-single-point)](#special-cause-single-point)

[Special cause -- shift [4](#special-cause-shift)](#special-cause-shift)

[Special cause -- trend [5](#special-cause-trend)](#special-cause-trend)

[Special cause -- two-sigma
[5](#special-cause-two-sigma)](#special-cause-two-sigma)

[Special cause conflict
[6](#special-cause-conflict)](#special-cause-conflict)

[Recalculations [7](#recalculations)](#recalculations)

[Baselines [8](#baselines)](#baselines)

[Special cause crossing recalculations
[8](#special-cause-crossing-recalculations)](#special-cause-crossing-recalculations)

[Summary icons -- assurance
[9](#summary-icons-assurance)](#summary-icons-assurance)

[Summary icons -- variation
[11](#summary-icons-variation)](#summary-icons-variation)

[Other [13](#other)](#other)

[Gaps [13](#gaps)](#gaps)

[Ghosting [13](#ghosting)](#ghosting)

[Moving range outliers
[13](#moving-range-outliers)](#moving-range-outliers)

[Other tools [13](#other-tools)](#other-tools)

[SQL query v2.6 & Power BI template v2.2
[14](#sql-query-v2.6-power-bi-template-v2.2)](#sql-query-v2.6-power-bi-template-v2.2)

[SQL query mini v1.0 [14](#sql-query-mini-v1.0)](#sql-query-mini-v1.0)

[Power BI custom visual (PowerBI-SPC v1.4.0.2) \[External\]
[14](#power-bi-custom-visual-powerbi-spc-v1.4.0.2-external)](#power-bi-custom-visual-powerbi-spc-v1.4.0.2-external)

# Number of points

When the XmR chart has 12 points or fewer, the process limits and
summary icons **[are not]{.underline}** shown.

When the XmR chart has 13 points or more, the process limits and summary
icons **[are]{.underline}** shown.

The mean and the target if provided are shown.

You may decide to require a larger number of points for an XmR chart,
such as 15.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image1.png){width="3.031496062992126in" height="1.5315244969378827in"}  | ![](media/image2.png){width="3.031496062992126in" height="1.5315244969378827in"}  |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     30      31      25      35      34      15      21      23      30      26    |     30      31      25      35      34      15      21      23      30      26    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     26      22                                                                    |     26      22      25                                                            |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+

------------------------------------------------------------------------

# Process limits

When there are enough points for an XmR chart, the upper and lower
process limits are calculated using sigma, **[not]{.underline}**
standard deviation.

The moving range is calculated by taking the absolute difference (i.e.
ignoring any minus sign) between consecutive points. In the left example
below, there are 15 points so 14 moving range values (4, 4, 6, ..., 1).

The mean of these 14 values is calculated (5.43) and divided by the
constant 1.128 to calculate sigma (4.81), and then multiplied by 3 to
calculate three-sigma (14.44).

The steps of multiplying by 3 and dividing by 1.128 can be combined into
one step by multiplying by 2.66 instead. There is a very small
difference between these methods, with the Excel tool using the latter
method (2.66).

Three sigma is added to the mean (23.20) to calculate the upper process
limit (37.64) and subtracted from the mean to calculate the lower
process limit (8.76).

The steps of multiplying by 3 and dividing by 1.128 can be combined into
one step by multiplying by 2.66 instead. There is a very small
difference between these methods, with the Excel tool using both
methods.

An optional extension is to remove [moving range
outliers](#moving-range-outliers) and recalculate sigma, but the Excel
tool does not do this.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image3.png){width="3.031496062992126in" height="1.5315244969378827in"}  | ![](media/image4.png){width="3.031496062992126in" height="1.5315244969378827in"}  |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     20      24      20      26      22      16      18      16      31      28    |   20      24      20      26      22      16      18      16      31      28      |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     34      26      30      19      18                                            |                                                                                   |
|                                                                                   |   ------------------------------------------------------------------------------- |
|   ------------------------------------------------------------------------------- |                                                                                   |
|                                                                                   | Mean = 22.10                                                                      |
| Upper process limit = 37.64                                                       |                                                                                   |
|                                                                                   |                                                                                   |
| Mean = 23.20                                                                      |                                                                                   |
|                                                                                   |                                                                                   |
| Lower process limit = 8.76                                                        |                                                                                   |
+===================================================================================+===================================================================================+

------------------------------------------------------------------------

# Special cause

When the improvement direction is set to either high is good or low is
good, blue (#00B0F0) and orange (#E46C0A) are used for special cause
variation. When set to neither, purple (#490092) is used for both
instead.

Where the is no special cause variation (i.e. common cause variation),
grey (#A6A6A6) is shown.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| **High is good**                                                                  | **Low is good**                                                                   |
|                                                                                   |                                                                                   |
| ![A graph with lines and dots Description automatically                           | ![A graph with lines and dots Description automatically                           |
| generated](media/image5.png){width="3.031496062992126in"                          | generated](media/image6.png){width="3.031496062992126in"                          |
| height="1.5315244969378827in"}                                                    | height="1.5315244969378827in"}                                                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|      8      27      32      26      20      21      23      21      23      22    |      8      27      32      26      20      21      23      21      23      22    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     26      23      20      20      29      28      22      23      25      26    |     26      23      20      20      29      28      22      23      25      26    |
|                                                                                   |                                                                                   |
|     28      29      26      24      36      29      35      22      30      18    |     28      29      26      24      36      29      35      22      30      18    |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+
| **Neither**                                                                       |                                                                                   |
|                                                                                   |                                                                                   |
| ![](media/image7.png){width="2.9921259842519685in" height="1.5116349518810148in"} |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|      8      27      32      26      20      21      23      21      23      22    |                                                                                   |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |                                                                                   |
|     26      23      20      20      29      28      22      23      25      26    |                                                                                   |
|                                                                                   |                                                                                   |
|     28      29      26      24      36      29      35      22      30      18    |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+

------------------------------------------------------------------------

# Special cause -- single point

When a point is outside of the process limits, it shows as special cause
variation.

+-----------------------------------------------------------------------------------+----------------------------------------------------------------------------------+
| ![](media/image8.png){width="3.031496062992126in" height="1.5315244969378827in"}  | ![A graph with lines and dots Description automatically                          |
|                                                                                   | generated](media/image9.png){width="3.031496062992126in"                         |
|   ------------------------------------------------------------------------------- | height="1.5313746719160104in"}                                                   |
|     45      29      20      22      25      20      27      24      22      23    |                                                                                  |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------------------------------------------------------------------------------ |
|     20      26      20      15       5                                            |     29      32      35      45      43      23      18      20      16      7    |
|                                                                                   |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------ |
|   ------------------------------------------------------------------------------- |     28      26      22      19      20                                           |
|                                                                                   |                                                                                  |
|                                                                                   |   ------------------------------------------------------------------------------ |
+===================================================================================+==================================================================================+

------------------------------------------------------------------------

# Special cause -- shift

When a consecutive run of points is all above or all below the mean,
they all show as special cause variation. This is usually set to at
least 6 points but may be set to at least 7 points.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image10.png){width="3.031496062992126in" height="1.5315244969378827in"} | ![](media/image11.png){width="3.031496062992126in" height="1.5315244969378827in"} |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     31      35      34      29      29      32      26      26      32      35    |     31      22      19      21      18      18      22      22      29      25    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     30      18      31      25      27      22      18      25      25      17    |     23      26      31      26      28      29      32      24      31      22    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+

------------------------------------------------------------------------

# Special cause -- trend

When a consecutive run of points is all increasing or all decreasing, they all show as special cause variation. This is usually set to at least 6 points but may be set to at least 7 points.

When set to at least 6 points, this is 5 increases (p~1~ to p~2~, p~2~to p~3~, ..., p~5~ to p~6~) but all 6 points show as special cause
variation.

There cannot be any pauses in the run.

The trend rule is the only special cause rule not affected by either the mean or sigma lines and so is the only rule that can cross the mean.

+------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image12.png){width="3.031496062992126in"                           | ![](media/image13.png){width="3.031496062992126in" height="1.5315244969378827in"} |
| height="1.5315244969378827in"}                                               |                                                                                   |
|                                                                              |   ------------------------------------------------------------------------------- |
|   -------------------------------------------------------------------------- |     23      30      28      25      25      20      18      24      16      13    |
|     11     14     18     20     22     23      18      21      17      23    |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|   ------ ------ ------ ------ ------ ------- ------- ------- ------- ------- |     14      18      18      24      26      29      19      20      28      16    |
|     26     20     16     25     23     22      19      16      15      12    |                                                                                   |
|                                                                              |   ------------------------------------------------------------------------------- |
|   -------------------------------------------------------------------------- |                                                                                   |
+==============================================================================+===================================================================================+

------------------------------------------------------------------------

# Special cause -- two-sigma

Within each consecutive run of 3 points, if 2 or all 3 points are beyond a two-sigma line, the 2 or 3 points show as special cause variation. All 3 points must be on the same side of the mean.

Except for at the ends of the chart, each point is part of 3 consecutive
run of 3 points to check (p~3~ is part of p~1~ to p~3~, p~2~ to p~4~ and
p~3~ to p~5~)

If a point is beyond three-sigma (i.e. the process limit), it does not
count for this rule but will show for the special cause rule of a single
point.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image14.png){width="3.031496062992126in" height="1.5315244969378827in"} | ![](media/image16.png){width="3.031496062992126in" height="1.5315244969378827in"} |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     42      40      39      26      39      24      22      29      32      22    |     42      40      39      26      39      24      22      29      32      22    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     20      23      25      26      22      24      27       7      19      24    |     20      23      25      26      22      24      27       7      19      24    |
|                                                                                   |                                                                                   |
|      7       7      32                                                            |      7       2      32                                                            |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|                                                                                   |                                                                                   |
| ![](media/image15.png){width="3.031496062992126in" height="1.5315244969378827in"} |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|     42      40      39      24      39      24      22      29      32      22    |                                                                                   |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |                                                                                   |
|     20      23      25      26      22      24      27       7      19      26    |                                                                                   |
|                                                                                   |                                                                                   |
|      7       7      32                                                            |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
+===================================================================================+:=================================================================================:+
|                                                                                   |                                                                                   |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+

------------------------------------------------------------------------

# Special cause conflict

As the trend rule is the only special cause rule that can cross the
mean, it is possible for a point to be special cause improvement and
special cause concern, but only one colour can be shown.

The Excel tool shows blue where this is a conflict, but equally orange
could be shown or the special cause rules could be applied in a
hierarchy (e.g. with the trend rule taking precedence).

In the examples below p~1~ to p~8~ are part of a decreasing trend and
p~8~ to p~14~ are part of an increasing trend.

In the left example where high is good, although p~1~ to p~8~ are part
of a decreasing trend and p~6~ to p~11~ are part of a shift below the
mean so would normally be shown in orange, p~1~ to p~2~ are single
points above the upper process limit, p~3~ to p~4~ are points above the
upper two-sigma line and p~8~ to p~14~ are part of an increasing trend
so only p~5~ to p~7~ are shown in orange.

In the right example where is low is good, although p~8~ to p~14~ are
part of a decreasing trend so would normally be shown in orange, p~6~ to
p~11~ are part of a shift below the mean so only p~12~ to p~14~ are
shown in orange.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| **High is good**                                                                  | **Low is good**                                                                   |
|                                                                                   |                                                                                   |
| ![A graph with lines and dots Description automatically                           | ![A graph with dotted lines and dots Description automatically                    |
| generated](media/image17.png){width="3.031496062992126in"                         | generated](media/image18.png){width="3.031496062992126in"                         |
| height="1.5315244969378827in"}                                                    | height="1.5315234033245844in"}                                                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     43      41      37      36      31      23      15      13      15      18    |     43      41      37      36      31      23      15      13      15      18    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     23      27      31      36      27      19      17      27      15      22    |     23      27      31      36      27      19      17      27      15      22    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+

------------------------------------------------------------------------

# Recalculations

When a recalculation is added, the mean and process limits for each
section are calculated separately, which may affect the special cause
variation and summary icons.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image19.png){width="3.031496062992126in" height="1.5315244969378827in"} | ![](media/image20.jpeg){width="3.031496062992126in" height="1.532957130358705in"} |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     16      24      22      19      19      18      24      25      18      17    |     16      24      22      19      19      18      24      25      18      17    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     16      25      15      23      19      35      32      35      31      27    |     16      25      15      23      19                                            |
|                                                                                   |                                                                                   |
|     33      28      38      35      30      28      29      27      24      23    |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|                                                                                   |                                             35      32      35      31      27    |
|                                                                                   |                                                                                   |
|                                                                                   |     33      28      38      35      30      28      29      27      24      23    |
|                                                                                   |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+

------------------------------------------------------------------------

# Baselines

When a baseline is set, the mean and process limits are calculated for
the baseline period only and then are extended for the remaining data
after the baseline period. This may affect the special cause variation
and summary icons.

When a recalculation is also added, only the baseline is implemented.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image19.png){width="3.031496062992126in" height="1.5315244969378827in"} | ![](media/image21.jpeg){width="3.031496062992126in" height="1.532957130358705in"} |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     16      24      22      19      19      18      24      25      18      17    |     16      24      22      19      19      18      24      25      18      17    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     16      25      15      23      19      35      32      35      31      27    |     16      25      15      23      19                                            |
|                                                                                   |                                                                                   |
|     33      28      38      35      30      28      29      27      24      23    |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|                                                                                   |                                             35      32      35      31      27    |
|                                                                                   |                                                                                   |
|                                                                                   |     33      28      38      35      30      28      29      27      24      23    |
|                                                                                   |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+

------------------------------------------------------------------------

# Special cause crossing recalculations

For the three special cause rules that require multiple points (i.e. not
the single point rule), these can cross a recalculation.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| ![](media/image22.png){width="3.031496062992126in" height="1.5315244969378827in"} | ![](media/image24.png){width="3.031496062992126in" height="1.5315244969378827in"} |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     28      23      26      21      23      25      24      29      30      27    |     28      23      26      21      23      25      24      29      30      27    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     25      30      27      24      19                                            |     25      30      27      26      19                                            |
|                                                                                   |                                                                                   |
|                                                                                   |                                                                                   |
|                                                                                   |                                                                                   |
|                                             22      28      28      29      33    |                                             22      26      28      29      33    |
|                                                                                   |                                                                                   |
|     28      30      31      30      26      27      34      30      32      35    |     28      30      31      30      26      27      34      30      32      35    |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|                                                                                   |                                                                                   |
| ![](media/image23.png){width="3.031496062992126in" height="1.5315244969378827in"} |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|     28      23      26      21      23      25      24      29      30      27    |                                                                                   |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |                                                                                   |
|     25      30      27      24      19                                            |                                                                                   |
|                                                                                   |                                                                                   |
|                                                                                   |                                                                                   |
|                                                                                   |                                                                                   |
|                                             22      32      28      29      33    |                                                                                   |
|                                                                                   |                                                                                   |
|     28      30      31      30      26      27      34      30      32      35    |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
+===================================================================================+===================================================================================+

------------------------------------------------------------------------

# Summary icons -- assurance

When a target is added and there are enough points for an XmR chart, the
target is compared with the process limits to determine the assurance
icon.

If the target is within the process limits, the grey hit or miss icon is
shown.

If the target is outside the process limits, either the blue pass or
orange fail icon is shown depending on whether high is good or low is
good.

If the improvement direction is set to neither, a target does not make
sense, so no assurance icon is shown, although the target is still
shown.

If a recalculation is added, the latest process limits are used.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| **High is good**                                                                  | **Low is good**                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     16      24      22      19      19      18      24      25      18      17    |     16      24      22      19      19      18      24      25      18      17    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     16      25      15      23      19      35      32      35      31      27    |     16      25      15      23      19      35      32      35      31      27    |
|                                                                                   |                                                                                   |
|     33      28      38      35      30      28      29      27      24      23    |     33      28      38      35      30      28      29      27      24      23    |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+
| No target:                                                                        | No target:                                                                        |
|                                                                                   |                                                                                   |
| ![](media/image19.png){width="3.031496062992126in" height="1.5315244969378827in"} | ![](media/image25.png){width="3.031496062992126in" height="1.5315244969378827in"} |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| Target of 40:                                                                     | Target of 40:                                                                     |
|                                                                                   |                                                                                   |
| ![](media/image26.jpeg){width="2.9921259842519685in"                              | ![](media/image27.png){width="2.9921259842519685in"                               |
| height="1.5130489938757656in"}                                                    | height="1.5116349518810148in"}                                                    |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| Target of 30:                                                                     | Target of 30:                                                                     |
|                                                                                   |                                                                                   |
| ![](media/image28.png){width="2.9921259842519685in"                               | ![](media/image29.jpeg){width="2.9921259842519685in"                              |
| height="1.5116349518810148in"}                                                    | height="1.5130489938757656in"}                                                    |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| Target of 10:                                                                     | Target of 10:                                                                     |
|                                                                                   |                                                                                   |
| ![](media/image30.png){width="2.9921259842519685in"                               | ![](media/image31.jpeg){width="2.9921259842519685in"                              |
| height="1.5116349518810148in"}                                                    | height="1.5130489938757656in"}                                                    |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| **Neither**                                                                       |                                                                                   |
|                                                                                   |                                                                                   |
| ![](media/image32.png){width="2.9921259842519685in"                               |                                                                                   |
| height="1.5116349518810148in"}                                                    |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|     16      24      22      19      19      18      24      25      18      17    |                                                                                   |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |                                                                                   |
|     16      25      15      23      19      35      32      35      31      27    |                                                                                   |
|                                                                                   |                                                                                   |
|     33      28      38      35      30      28      29      27      24      23    |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| **Too few points**                                                                | **Recalculation**                                                                 |
|                                                                                   |                                                                                   |
| ![](media/image33.png){width="3.031496062992126in" height="1.5315244969378827in"} | ![](media/image34.jpeg){width="2.9921259842519685in"                              |
|                                                                                   | height="1.5130489938757656in"}                                                    |
|   ------------------------------------------------------------------------------- |                                                                                   |
|   16      24      22      19      19      18      24      25      18      17      |   ------------------------------------------------------------------------------- |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |     16      24      22      19      19      18      24      25      18      17    |
|                                                                                   |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|   ------------------------------------------------------------------------------- |     16      25      15      23      19                                            |
|                                                                                   |                                                                                   |
|                                                                                   |                                                                                   |
|                                                                                   |                                                                                   |
|                                                                                   |                                             35      32      35      31      27    |
|                                                                                   |                                                                                   |
|                                                                                   |     33      28      38      35      30      28      29      27      24      23    |
|                                                                                   |   ------------------------------------------------------------------------------- |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+

------------------------------------------------------------------------

# Summary icons -- variation

When there are enough points for an XmR chart, the variation icon is
determined by the last point.

If the last point is blue, orange or purple, one of two icons is shown
depending on whether it is a high value or low value.

As the last point is used for determining the variation icon, it does
not matter where a recalculation has been added or a baseline has been
set.

+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+
| **High is good**                                                                  | **Low is good**                                                                   |
|                                                                                   |                                                                                   |
| ![](media/image35.png){width="2.9921259842519685in"                               | ![](media/image38.png){width="2.9921259842519685in"                               |
| height="1.5116349518810148in"}                                                    | height="1.5116349518810148in"}                                                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     16      20      22      18      21      18      26      28      24      26    |     16      20      22      18      21      18      26      28      24      26    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     19      18      25      32      43      28      22      45                    |     19      18      25      32      43      28      22      45                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|                                                                                   |                                                                                   |
| ![](media/image36.png){width="2.9921259842519685in"                               | ![](media/image39.png){width="2.9921259842519685in"                               |
| height="1.5116349518810148in"}                                                    | height="1.5116349518810148in"}                                                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     16      20      22      18      21      18      26      28      24      26    |     16      20      22      18      21      18      26      28      24      26    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     19      18      25      32      43      28      22      25                    |     19      18      25      32      43      28      22      25                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|                                                                                   |                                                                                   |
| ![](media/image37.png){width="2.9921259842519685in"                               | ![](media/image40.png){width="2.9921259842519685in"                               |
| height="1.5116349518810148in"}                                                    | height="1.5116349518810148in"}                                                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
|     16      20      22      18      21      18      26      28      24      26    |     16      20      22      18      21      18      26      28      24      26    |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|     19      18      25      32      43      28      22       5                    |     19      18      25      32      43      28      22       5                    |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |   ------------------------------------------------------------------------------- |
+===================================================================================+===================================================================================+
| **Neither**                                                                       | **Too few points**                                                                |
|                                                                                   |                                                                                   |
| ![](media/image41.png){width="2.9921259842519685in"                               | ![](media/image44.png){width="3.031496062992126in" height="1.5315244969378827in"} |
| height="1.5116349518810148in"}                                                    |                                                                                   |
|                                                                                   |   ------------------------------------------------------------------------------- |
|   ------------------------------------------------------------------------------- |   16      20      22      18      21      18      26      28      24      26      |
|     16      20      22      18      21      18      26      28      24      26    |   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |                                                                                   |
|     19      18      25      32      43      28      22      45                    |   ------------------------------------------------------------------------------- |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|                                                                                   |                                                                                   |
| ![](media/image42.png){width="2.9921259842519685in"                               |                                                                                   |
| height="1.5116349518810148in"}                                                    |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|     16      20      22      18      21      18      26      28      24      26    |                                                                                   |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |                                                                                   |
|     19      18      25      32      43      28      22      25                    |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|                                                                                   |                                                                                   |
| ![](media/image43.png){width="2.9921259842519685in"                               |                                                                                   |
| height="1.5116349518810148in"}                                                    |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
|     16      20      22      18      21      18      26      28      24      26    |                                                                                   |
|   ------- ------- ------- ------- ------- ------- ------- ------- ------- ------- |                                                                                   |
|     19      18      25      32      43      28      22       5                    |                                                                                   |
|                                                                                   |                                                                                   |
|   ------------------------------------------------------------------------------- |                                                                                   |
+-----------------------------------------------------------------------------------+-----------------------------------------------------------------------------------+

------------------------------------------------------------------------

# Other

There are other functionality and features to be aware of:

## Gaps

When no value is provided for a date within the chart, the moving range
calculation is incorrect. This then decreases the average moving range
value, which in turn reduces sigma and narrows the process limits.
Therefore, there should be no gaps.

If a date has no value, such as when it is unknown or the denominator is
0, the dates in the table must be manually entered to ensure empty dates
are skipped.

## Ghosting

Ghosting is not supported. This is a technique that allows a point to be
plotted on an SPC chart without it affecting the SPC calculations (e.g.
mean and process limits).

## Moving range outliers

Removing moving range outliers is not supported. This is a technique
where sigma is recalculated with points removed that on first
calculation exceed the moving range upper limit. This reduces sigma and
narrows the process limits.

The moving range upper limit is the average moving range multiplied by
3.27.

------------------------------------------------------------------------

------------------------------------------------------------------------

# Other tools

Below are lists of differences found with other tools, with default
settings used unless specified to match the Single Chart Tool above as
closely as possible:

## SQL query v2.6 & Power BI template v2.2

\[[FutureNHS](https://future.nhs.uk/MDC/view?objectID=28387280)\]

Differences:

- Special cause conflict is handled differently. Either blue is always
  shown over orange or visa versa, as set in the SQL query.

- Only the trend rule crosses recalculations

- When a target is added when the improvement direction is set to
  neither, the target is not shown.

## SQL query mini v1.0

Differences:

- Only the trend rule crosses recalculations

- When a target is added when the improvement direction is set to
  neither, the target is not shown.

## Power BI custom visual (PowerBI-SPC v1.4.0.2) \[External\]

[\[Microsoft\]](https://appsource.microsoft.com/en-gb/product/power-bi-visuals/healthdepartmentwa1667894240640.powerbi-spc-charts)
[\[GitHub\]](https://github.com/AUS-DOH-Safety-and-Quality/PowerBI-SPC)
[\[Differences\]](https://app.powerbi.com/view?r=eyJrIjoiZjJmNWVlYzgtMmYzNi00ZTM1LWIxZmYtMDJjMTg5Njk0ODY1IiwidCI6IjAzMTU5ZTkyLTcyYzYtNGIyMy1hNjRhLWFmNTBlNzkwYWRiZiJ9)

Settings:

Data Settings

Keep Outliers in Limit Calcs. = On

> Outlier Highlighting

Astronomical Points

> Astronomical Points = On
>
> Imp. Ast. Colour = #00B0F0
>
> Det. Ast. Colour = #E46C0A
>
> Neutral (Low) Ast. Colour = #490092
>
> Neutral (High) Ast. Colour = #490092
>
> Shifts
>
> Shifts = On
>
> Shift Points = 6
>
> Imp. Shift Colour = #00B0F0
>
> Det. Shift Colour = #E46C0A
>
> Neutral (Low) Shift Colour = #490092
>
> Neutral (High) Shift Colour = #490092
>
> Trends
>
> Trends = On
>
> Trend Points = 6
>
> Imp. Trend Colour = #00B0F0
>
> Det. Trend Colour = #E46C0A
>
> Neutral (Low) Trend Colour = #490092
>
> Neutral (High) Trend Colour = #490092
>
> Two-in-Three
>
> Two-in-Three = On
>
> Imp. Two-in-Three Colour = #00B0F0
>
> Det. Two-in-Three Colour = #E46C0A
>
> Neutral (Low) Two-in-Three Colour = #490092
>
> Neutral (High) Two-in-Three Colour = #490092

NHS Icons

Variation

> Show Variation Icons = On
>
> Assurance
>
> Show Assurance Icons = On

Differences:

- Process limits and summary icons are shown when there are 2 to 12
  points, not just 13 points or more.

- The two-sigma rule includes the third point regardless. For example,
  two consecutive points, p~2~ and p~3~, beyond two-sigma will always be
  accompanied by their neighbouring points, p~1~ and p~4~.

- Special cause conflict is handled differently.

- It is not clear whether baselines can be set.
